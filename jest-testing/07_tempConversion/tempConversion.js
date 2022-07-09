const ftoc = function(faren) {
  return Math.round(10 * (faren - 32) * 5 / 9) / 10;
};

const ctof = function(celc) {
  return Math.round(10 * (celc * 9 / 5) + 32) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
