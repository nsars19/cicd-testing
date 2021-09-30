const printHello = require("./index");

test("Says hello", () => {
  expect(printHello()).toBe("Hello");
});

test("Doesn't say goodbye", () => {
  expect(printHello()).not.toBe("Goodbye");
});
