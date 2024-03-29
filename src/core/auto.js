// -----------------
// Global variables
// -----------------

// Codebeat:disable[LOC,ABC,BLOCK_NESTING,ARITY]
/* eslint-disable consistent-return */
const translate = require("./translate");
const logger = require("./logger");
const botSend = require("./send");
const fn = require("./helpers");
const {ChannelType} = require("discord.js");
// --------------
// Proccess task
// --------------

function sendTranslation (data)
{

   if (data.proccess)
   {

      if (
         data.message.content === "" &&
         data.message.attachments.array().length > 0
      )
      {

         // -------------
         // Send message
         // -------------

         return botSend(data);

      }

      // -------------
      // Send message
      // -------------

      return translate(data);

   }

}

// ------------------
// Start translation
// ------------------

function startTranslation (data, i, row)
{

   const replyID = row.reply;

   // ---------------------------------
   // Add footer to forwarded messages
   // ---------------------------------

   data.footer = {
      "text": "via "
   };

   if (data.message.channel.type === ChannelType.GuildText)
   {

      data.footer.text += `#${data.message.channel.name}`;

   }

   if (data.message.channel.type === ChannelType.DM)
   {

      data.footer.text += "DM";

   }

   const footerOriginal = data.footer;

   // -------------------
   // Sending to user/DM
   // -------------------

   if (row.dest.startsWith("@"))
   {

      const footerExtra = {
         "icon_url": data.message.guild.iconURL(),
         "text": `${data.footer.text
         } ‹ ${data.message.guild.name} | reply with ${replyID}:`

      };

      const userID = row.dest.slice(1);

      fn.getUser(
         data.message.client,
         userID,
         (user) =>
         {

            if (user && user.createDM)
            {

               user.createDM().then((dm) =>
               {

                  data.footer = footerExtra;
                  data.forward = dm.id;
                  sendTranslation(data);

               }).
                  catch((err) => logger(
                     "error",
                     err,
                     "dm",
                     data.message.channel.guild.name
                  ));

            }

         }
      );

   }

   // -------------------------
   // Sending to other channel
   // -------------------------

   else
   {

      data.footer = footerOriginal;
      sendTranslation(data);

   }

}
// ---------------------
// Analyze rows in loop
// ---------------------

function analyzeRows (data, i)
{

   const row = data.rows[i];

   // -------------------------------
   // Set forward channel for sender
   // -------------------------------

   data.forward = row.dest;
   data.embeds = data.message.embeds;
   data.attachments = data.message.attachments;

   if (data.message.channel.type === ChannelType.DM)
   {

      const replyIndex = data.message.content.indexOf(":");
      const reply = data.message.content.slice(
         0,
         replyIndex
      );
      const replyCon = data.message.content.slice(replyIndex + 1);

      if (reply === row.reply)
      {

         data.proccess = true;
         data.message.content = replyCon;

      }
      else
      {

         data.proccess = false;

      }

   }

   // ------------------------
   // Set translation options
   // ------------------------

   data.translate = {
      "from": {"valid": [{"iso": row.LangFrom}]},
      "original": data.message.content,
      "to": {"valid": [{"iso": row.LangTo}]}
   };

   // ------------------
   // Start translation
   // ------------------

   startTranslation(
      data,
      i,
      row
   );

}

// -----------------
// Get data from db
// -----------------

module.exports = function run (data)
{

   if (data.err)
   {

      return logger(
         "error",
         data.err,
         "db",
         data.message.channel.guild.name
      );

   }

   if (data.rows.length > 0)
   {

      // ----------------------------------------------
      // Add !i to end of message to ignore it instead
      // ----------------------------------------------

      if (data.message.content === undefined || data.message.content === " ")
      {

         console.log(`--a.js--- Empty Message Error: ----1----\nServer: ${data.message.channel.guild.name},\nChannel: ${data.message.channel.id} - ${data.message.channel.name},\nMessage ID: ${data.message.id},\nContent: ${data.message.content},\nWas Image: ${data.message.attachments},\nWas Embed: ${data.message.embeds},\nSender: ${data.message.member.displayName} - ${data.message.member.id},\nTimestamp: ${data.message.createdAt}\n----------------------------------------`);
         data.message.content = `Error: 10001 - Auto Error, Please report to admins.`;

      }

      if (data.message.content !== undefined)
      {

         if (data.message.content.endsWith("!i"))
         {

            return data.message.react("➖").catch((err) => logger(
               "dev",
               `${err}\n\n'# Cannot react`
            ));

         }

         data.proccess = true;

         for (let i = 0; i < data.rows.length; i += 1)
         {

            analyzeRows(
               data,
               i
            );

         }

      }

   }

};
