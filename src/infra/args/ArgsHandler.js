const { Command } = require("./Command");
const { Option } = require("./Option");

class ArgsHandler {
  parse(argv) {
    /** @type {Args} */
    const args = {
      command: undefined,
      options: [],
    };
    const argsIgnoreOffset = 2;
    for (let index = argsIgnoreOffset; index < argv.length; index++) {
      if (index === argsIgnoreOffset) {
        args.command = new Command(argv[index], []);
      } else if (this.#isOption(argv[index])) {
        args.options.push(new Option(argv[index]));
      } else {
        args.command?.args?.push(argv[index]);
      }
    }

    return args;
  }

  /**
   * @param {string} arg
   * @returns {boolean}
   *   */
  #isOption(arg) {
    return arg.startsWith("--");
  }
}

module.exports = {
  ArgsHandler,
};

/**
 * @typedef Args
 * @prop {Command | undefined} command
 * @prop {Option[]} options
 */
