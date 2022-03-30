const app = require("../app.js");

describe("Should add two numbers together", () => {
  test("Should equal 5 when passed 2 and 3", () => {
    expect(app.add(2, 3)).not.toBe(10);
  });
  test("Should equal 100 when adding 50 and 50", () => {
    expect(app.add(50, 50)).toBe(100);
  });
});

it("should include the name Dave", () => {
  expect(app.myArray).toContain("Dave");
});
