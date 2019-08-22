import { range, splitIntoEqualParts } from "./arrays";

const expected = {
  1: [[0], [], [], []],
  2: [[0], [1], [], []],
  3: [[0], [1], [2], []],
  4: [[0], [1], [2], [3]],
  5: [[0, 4], [1], [2], [3]],
  8: [[0, 4], [1, 5], [2, 6], [3, 7]],
  11: [[0, 4, 8], [1, 5, 9], [2, 6, 10], [3, 7]],
  13: [[0, 4, 8, 12], [1, 5, 9], [2, 6, 10], [3, 7, 11]],
  14: [[0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10], [3, 7, 11]],
  15: [[0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11]]
};

const numberOfColumnsToTest = [4];

describe("Test split", () => {
  numberOfColumnsToTest.forEach(columns =>
    Object.keys(expected).forEach(size => {
      test(`Splits array of size ${size} into ${columns} columns`, () => {
        expect(splitIntoEqualParts(range(Number(size)), columns)).toEqual(
          expected[size]
        );
      });
    })
  );
});
