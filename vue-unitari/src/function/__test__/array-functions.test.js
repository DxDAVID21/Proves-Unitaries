import { describe, expect, test } from "vitest";
import {
  arrayLength,
  arrayPush,
  arrayPop,
  arrayUnshift,
  arrayShift,
  arraySome
} from "../arrayFunctions";

// arrayLength
describe("array lenght function", () => {
  test("array vacio", () => {
    expect(arrayLength([])).toBe(0);
  });

  test("array un elemento", () => {
    expect(arrayLength([1])).toBe(1);
  });

  test("array 2 elementos", () => {
    expect(arrayLength([1, 2])).toBe(2);
  });
});

// arrayPush
describe("arrayPush", () => {
  test("añadir elemento", () => {
    expect(arrayPush([1], 2)).toEqual([1, 2]);
  });
});

// arrayPop
describe("arrayPop", () => {
  test("extraer último", () => {
    const arr = [1, 2];
    expect(arrayPop(arr)).toBe(2);
    expect(arr).toEqual([1, undefined]);
  });
});

// arrayUnshift
describe("arrayUnshift", () => {
  test("añadir al inicio", () => {
    expect(arrayUnshift([2, 3], 1)).toEqual([1, 2, 3]);
  });
});

// arrayShift
describe("arrayShift", () => {
  test("extraer primero", () => {
    const arr = [1, 2, 3];
    expect(arrayShift(arr)).toBe(1);
    expect(arr).toEqual([2, 3, undefined]);
  });
});

describe("arraySome", () => {
  test("algún elemento cumple", () => {
    expect(arraySome([1, 2, 3], (e) => e === 2)).toBe(true);
  });
});
