const { KebabToCamel } = require("../caseParser");

class Option {
  /** @param {string} option  */
  constructor(option) {
    this.#validate(option);
    const [name, value] = option.split("=");
    const nameWithoutPrefix = this.#removePrefix(name);
    this.name = KebabToCamel.parse(nameWithoutPrefix);
    this.value = value || true;
  }

  /** @param {string} option*/
  #validate(option) {
    const pattern = /^--[a-zA-Z]/;
    if (!pattern.test(option)) throw new Error("Invalid option");
  }
  /**
   * @param {string} option
   * @returns {string}
   *  */
  #removePrefix(option) {
    return option.replace(/^--/, "");
  }
}

module.exports = { Option };
