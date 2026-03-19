import { describe, expect, test } from "vitest";
import {
  arrayLength,
  arrayPush,
  arrayPop,
  arrayUnshift,
  arrayShift,
  arraySome,
  arrayEvery,
  arrayFind,
  arrayFilter,
  arrayMap,
  arrayFindIndex,
  arrayIncludes,
  arrayIndexOf,
  arrayReduce,
  arrayJoin,
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

// // arrayUnshift
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

// arraySome
describe("arraySome", () => {
  test("algún elemento cumple", () => {
    expect(arraySome([1, 2, 3], (e) => e === 2)).toBe(true);
  });
});

// arrayEvery
describe("arrayEvery", () => {
  test("todos cumplen", () => {
    expect(arrayEvery([2, 2], (e) => e === 2)).toBe(true);
  });
});

// arrayFind
describe("arrayFind", () => {
  test("encuentra elemento", () => {
    expect(arrayFind([1, 2, 3], (e) => e === 3)).toBe(3);
  });
});

// arrayFilter
describe("arrayFilter", () => {
  test("filtra elemento", () => {
    expect(arrayFilter([1, 2, , 2, 3], (e) => e === 2)).toEqual([2, 2]);
  });
});

// arrayMap
describe("arrayMap", () => {
  test("mapea elementos", () => {
    expect(arrayMap([1, 2], (e) => e * 2)).toEqual([2, 4]);
  });
});

// arrayFindIndex
describe("arrayFindeIndex", () => {
  test("encuentra indice", () => {
    expect(arrayFindIndex([1, 2, 3], (e) => e === 2)).toBe(1);
  });
});

// arrayIncludes
describe("arrayIncludes", () => {
  test("incluye elemento", () => {
    expect(arrayIncludes([1, 2, 3], 2)).toBe(true);
  });
});

// arrayIndexOf
describe("arrayIndexOf", () => {
  test("índice correcto", () => {
    expect(arrayIndexOf([1, 2, 3], 3)).toBe(2);
  });
});

// arrayReduce
describe("arrayReduce", () => {
  test("reduce suma", () => {
    expect(arrayReduce([1, 2, 3], (a, b) => a + b, 0)).toBe(6);
  });
});

// arrayJoin
describe("arrayJoin", () => {
  test("une elementos", () => {
    expect(arrayJoin([1, 2, 3], "-")).toBe("1-2-3");
  });
});
