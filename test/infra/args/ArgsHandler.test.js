const { Command, Option, ArgsHandler } = require("../../../src/infra/args");

test("Should parse args", () => {
  const output = new ArgsHandler().parse([
    "/root/.nvm/versions/node/v18.20.2/bin/node",
    "/root/cli/src/index.js",
    "create",
    "arg1",
    "--first-option=2",
    "arg2",
    "--second-option",
  ]);
  expect(output).toEqual({
    command: new Command("create", ["arg1", "arg2"]),
    options: [new Option("--first-option=2"), new Option("--second-option")],
  });
});
