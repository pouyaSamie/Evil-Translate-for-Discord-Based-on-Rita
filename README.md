<h1 align="center">Evil Translate</h1>
<p align="center">Based on RITA bot <b> BUT ALWAYS FREE </b>.</p>
</p>

---

<p align="center">An open-source, free Discord Translator Bot built using <strong>google-translate-api</strong> and <strong>Discord.js</strong>.</p>

### This project is based on Rita bot. After Rita Bot went private this repo continued as an open source project to make it alive. This project will change its name to Evil Translate.

## Features

- Real-time language translation in Discord text channels.
- Simple and easy-to-use commands for translation.
- Docker support for easy deployment.



<strong>google-translate-api</strong> and <strong>Discord.js</strong> have been updated to the latest version and many changes have been made to make them up-to-date and easy to run.
Also now you can run this project on <strong>Docker</strong> :)



### Prerequisites

- Node.js
- yarn
- Docker (if using Docker)

## Getting Started

- [Run EvilTranlate on docker (Recommended)](#docker)
- [Setting up EvilTranlate locally](#new-bot)

## <a name="docker"></a>:floppy_disk: Run EvilTranlate on docker (Recommended)

#### 1. Install Docker.

- install docker using [docker documentation](https://docs.docker.com/get-docker/).

#### 2. Get Discord Key and clientID.

- Get a Discord token for your bot it is easy as hell. just follow the [Discord documentations](https://discord.com/developers/docs/getting-started#creating-an-app).
  #### JUST MAKE SURE TO CHECK BOT OPTION IN YOUR DASHBOARD

![DiscordBot](https://github.com/pouyaSamie/Evil-Translate-for-Discord-Based-on-Rita/assets/1997461/3747caa9-76f2-4a47-be2d-59c9e74ef483)

run the following command and replace YOUR_BOT_TOKEN with the token you got before.

```properties
docker run -e DISCORD_TOKEN=YOUR_BOT_TOKEN  pouyasamie/evil-translate-discord-bot:latest
```

#### 3. Invite the bot to your server

Before inviting your Bot be sure to give him Admin permission
you can use this template <strong>(replace APPLICATION_ID with your Application ID from section 2)</strong>:

https://discordapp.com/oauth2/authorize?&client_id=APPLICATION_ID&scope=bot&permissions=8

For Usage just check [RitaBot Docs](https://docs.ritabot.gg/ritabot-docs/).

## <a name="new-bot"></a>:computer: Setting up EvilTranlate locally

#### 1. Fork this repository.

If you don't yet have a GitHub account, [create one](https://github.com/join)! It's free and easy.

- Click [here](https://github.com/pouyaSamie/Evil-Translate-for-Discord-Based-on-Rita/fork) or use the button in the upper right-hand side of this page to fork the repository so that it will be associated with your GitHub account.

#### 1. Clone your forked repository.

Run the following command:

```properties
foo@bar:~$ git clone git@github.com:[your-user-name]/Evil-Translate-for-Discord-Based-on-Rita.git && cd Evil-Translate-for-Discord-Based-on-Rita
```

rename `.env.sample` to `.env`

Get a Discord token for your bot it is easy as hell. just follow the [Discord documentations](https://discord.com/developers/docs/getting-started#creating-an-app).

in `.env` replace `YOUR_DICORD_TOKEN` with your new Token

run the following command.

```properties
yarn install && yarn start
```

you can use this template to invite your bot <strong>(replace APPLICATION_ID with your Application ID from section 2)</strong>:

https://discordapp.com/oauth2/authorize?&client_id=APPLICATION_ID&scope=bot&permissions=8

For Usage just check [RitaBot Docs](https://docs.ritabot.gg/ritabot-docs/).

you are all set :)
make sure to send an issue if you have any problems. I will try my best to solve your issues.
you can also join the Evil translate [support discord](https://discord.gg/ZM78amWexe)