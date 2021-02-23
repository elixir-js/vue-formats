import { checkToOnlyNumber } from "../src/utils/regexp";

test("check to only number", () => {
  const result = checkToOnlyNumber();
  const expected = false;
  expect(result).toEqual(expected);
});
