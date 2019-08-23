import { capitalize } from "./string-utils";

describe("string-utils", () => {
  describe("capitalize", () => {
    it("should create title", () => {
      expect(capitalize("hello world")).toBe("Hello world");
    });
  });
});
