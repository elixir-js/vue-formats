import { checkToOnlyNumber, moneyFormat } from "../src/utils/moneyUtils";

describe("check export function checkToOnlyNumber", () => {
    test("for check empty string", () => {
        const result = checkToOnlyNumber();
        const expected = false;
        expect(result).toEqual(expected);
    });

    test("check value null", () => {
        const result = checkToOnlyNumber(null);
        const expected = false;
        expect(result).toEqual(expected);
    });

    test("check string 'ababa2334'", () => {
        const result = checkToOnlyNumber("ababa2334");
        const expected = false;
        expect(result).toEqual(expected);
    });

    test("check value '123'", () => {
        const result = checkToOnlyNumber("123");
        const expected = true;
        expect(result).toEqual(expected);
    });

    test("check value '123.'", () => {
        const result = checkToOnlyNumber("123.");
        const expected = false;
        expect(result).toEqual(expected);
    });

    test("check value '0'", () => {
        const result = checkToOnlyNumber("0");
        const expected = true;
        expect(result).toEqual(expected);
    });
});

describe("check export function moneyFormat", () => {
    test("value empty string", () => {
        const result = moneyFormat("");
        const expected = "";
        expect(result).toEqual(expected);
    });

    test("value string 1234", () => {
        const result = moneyFormat("1234");
        const expected = "1,234";
        expect(result).toEqual(expected);
    });

    test("value string 1", () => {
        const result = moneyFormat("1");
        const expected = "1";
        expect(result).toEqual(expected);
    });

    test("value string -1234", () => {
        const result = moneyFormat("-1234");
        const expected = "-1,234";
        expect(result).toEqual(expected);
    });
});
