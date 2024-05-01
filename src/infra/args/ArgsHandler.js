const { Command } = require("./Command");
const { Option } = require("./Option");

class ArgsHandler {
  parse(argv) {
    /** @type {Args} */
    const args = {
      command: undefined,
      options: new Map(),
    };
    const argsIgnoreOffset = 2;
    for (let index = argsIgnoreOffset; index < argv.length; index++) {
      if (index === argsIgnoreOffset) {
        args.command = new Command(argv[index], []);
      } else if (this.#isOption(argv[index])) {
        const option = new Option(argv[index]);
        args.options.set(option.name, option);
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
 * @prop {Map<string, Option>} options
 */
