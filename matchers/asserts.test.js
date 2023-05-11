it("should return equal", () => {
  /**@assert toBe */
  expect("Hello world").toBe("Hello world");
});

it("should return not", () => {
  /**@assert not to*/
  expect(3).not.toBe(4);
  expect(3).not.to.toBe(4);
});

it("should return toBeCloseTo", () => {
  /**@assert toBeCloseTo */
  let result = 0.2 + 0.1;
  expect(result).toBeCloseTo(0.3, 5);
  expect(result).not.toBeCloseTo(0.3, 50);
});
