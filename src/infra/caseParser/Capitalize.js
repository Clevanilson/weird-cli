class Capitalize {
  /** @param {string} string  */
  static execute(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

module.exports = { Capitalize };
