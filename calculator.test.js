const { add } = require("./calculator");

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself when a single number is provided", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  test("should handle any amount of numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });
});
