const { Capitalize } = require("./Capitalize");

class KebabToCamel {
  /** @param {string} prop  */
  static parse(prop) {
    const words = prop.split("-");
    return words.reduce((previousWord, currentWord, index) => {
      if (!index) return currentWord;
      return previousWord + Capitalize.execute(currentWord);
    }, "");
  }
}

module.exports = { KebabToCamel };
