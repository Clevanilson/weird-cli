const { Capitalize } = require("../../../src/infra/CaseParser");

test("Should capitalize word to be Word", () => {
  expect(Capitalize.execute("word")).toBe("Word");
});
