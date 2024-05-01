const { Option } = require("../../../src/infra/args");

test("Should create an option with a value", () => {
  const sut = new Option("--first-option=1");
  expect(sut.name).toBe("firstOption");
  expect(sut.value).toBe("1");
});

test("Should create an option with the default value true", () => {
  const sut = new Option("--second-good-option");
  expect(sut.name).toBe("secondGoodOption");
  expect(sut.value).toBe(true);
});

test.each(["option", "1option", "123", ""])(
  "Should not create an invalid option",
  (option) => {
    expect(() => new Option(option)).toThrow("Invalid option");
  }
);
