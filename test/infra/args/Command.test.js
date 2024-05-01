const { Command } = require("../../../src/infra/args");

test("Should create a command", () => {
  const sut = new Command("create", ["someArg1", "someArg2"]);
  expect(sut.name).toBe("create");
  expect(sut.args).toEqual(["someArg1", "someArg2"]);
});

test.each(["1command", "123", ""])(
  "Should not create an invalid command",
  (command) => {
    expect(() => new Command(command)).toThrow("Invalid command");
  }
);
