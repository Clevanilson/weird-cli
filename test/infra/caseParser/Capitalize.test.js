const { Capitalize } = require("../../../src/infra/caseParser");

test("Should capitalize word to be Word", () => {
  expect(Capitalize.execute("word")).toBe("Word");
});
