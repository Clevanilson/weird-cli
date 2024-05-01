class Command {
  /**
   * @param {string} name
   * @param {string[]} [args]
   */
  constructor(name, args) {
    this.#validate(name);
    this.name = name;
    this.args = args;
  }

  /** @param {string} option*/
  #validate(option) {
    const pattern = /^[a-zA-Z]/;
    if (!pattern.test(option)) throw new Error("Invalid command");
  }
}

module.exports = {
  Command,
};
