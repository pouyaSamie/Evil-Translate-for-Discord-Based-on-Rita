// -------
// Colors
// -------

// Codebeat:disable[LOC,ABC,BLOCK_NESTING,ARITY]
const colors = {
   "default": 41215,
   "err": 13107200,
   "error": 13107200,
   "info": 9514728,
   "ok": 1551647,
   "warn": 16764928
};

// ----------
// Get color
// ----------

exports.get = function get (color)
{

   if (Object.hasOwn(
      colors,
      color
   ))
   {

      return colors[color];

   }
   if (isNaN(color))
   {

      return colors.warn;

   }
   return color;

};

// ------------------------------------
// Convert RGB color to decimal number
// ------------------------------------

exports.rgb2dec = function rgb2dec (rgb)
{

   // eslint-disable-next-line no-bitwise
   return (rgb[0] << 16) + (rgb[1] << 8) + rgb[2];

};
