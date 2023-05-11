it("should return equal", () => {
  /**@assert toBe */
  expect("Hello world").toBe("Hello world");
});

it("should return not", () => {
  /**@assert not to*/
  expect(3).not.toBe(4);
  expect(3).not.to.toBe(4);
});
