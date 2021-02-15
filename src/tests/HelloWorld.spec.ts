import HelloWorld from "../HelloWorld";

describe("HelloWorld", () => {
  it("should return hello world string", () => {
    expect(new HelloWorld().hello()).toEqual("Hello, world!");
  });
});
