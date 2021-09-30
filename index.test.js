const printHello = require("./index");

test("Says hello", () => {
  expect(printHello()).toBe("Hello");
});
