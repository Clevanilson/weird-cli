const { KebabToCamel } = require("../../../src/infra/CaseParser");

test("Should parse kebab-case some-prop to camelCase someProp", () => {
  expect(KebabToCamel.parse("some-prop")).toBe("someProp");
});
