// 1. arrayLength
export function arrayLength(array) {
  let i = 0;
  while (
    array[i] !== undefined ||
    (array[i] === undefined && array[i + 1] !== undefined)
  ) {
    i++;
  }
  return i;
}

// 2. arrayPush
export function arrayPush(array, element) {
  const len = arrayLength(array);
  array[len] = element;
  return array;
}

// 3. arrayPop
export function arrayPop(array) {
  const len = arrayLength(array);
  if (len === 0) return undefined;

  const last = array[len - 1];
  array[len - 1] = undefined;
  return last;
}

// 4. arrayUnshift
export function arrayUnshift(array, element) {
  const len = arrayLength(array);

  for (let i = len; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = element;
  return array;
}

// 5. arrayShift
export function arrayShift(array) {
  const len = arrayLength(array);
  if (len === 0) return undefined;

  const first = array[0];

  for (let i = 0; i < len - 1; i++) {
    array[i] = array[i + 1];
  }

  array[len - 1] = undefined;
  return first;
}

// 6. arraySome
export function arraySome(array, callback) {
  const len = arrayLength(array);
  for (let i = 0; i < len; i++) {
    if (callback(array[i])) return true;
  }
  return false;
}

// 7. arrayEvery
export function arrayEvery(array, callback) {
  const len = arrayLength(array);
  for (let i = 0; i < len; i++) {
    if (!callback(array[i])) return false;
  }
  return true;
}

// 8. arrayFind
export function arrayFind(array, callback) {
  const len = arrayLength(array);
  for (let i = 0; i < len; i++) {
    if (callback(array[i])) return array[i];
  }
  return undefined;
}

// 9. arrayFilter
export function arrayFilter(array, callback) {
  const result = [];
  const len = arrayLength(array);

  for (let i = 0; i < len; i++) {
    if (callback(array[i])) {
      arrayPush(result, array[i]);
    }
  }
  return result;
}

// 10. arrayMap
export function arrayMap(array, callback) {
  const result = [];
  const len = arrayLength(array);

  for (let i = 0; i < len; i++) {
    arrayPush(result, callback(array[i]));
  }

  return result;
}

// 11. arrayFindIndex
export function arrayFindIndex(arr, callback) {
  const len = arrayLength(arr);
  for (let i = 0; i < len; i++) {
    if (callback(arr[i])) return i;
  }
  return -1;
}

// 12. arrayIncludes
export function arrayIncludes(array, element) {
  const len = arrayLength(array);
  for (let i = 0; i < len; i++) {
    if (array[i] === element) return true;
  }
  return false;
}

// 13. arrayIndexOf
export function arrayIndexOf(array, element) {
  const len = arrayLength(array);
  for (let i = 0; i < len; i++) {
    if (array[i] === element) return i;
  }
  return -1;
}

// 14. arrayReduce
export function arrayReduce(array, callback, initialValue) {
  const len = arrayLength(array);
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  let start = initialValue !== undefined ? 0 : 1;

  for (let i = start; i < len; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
}

// 15. arrayJoin
export function arrayJoin(array, separator = ",") {
  const len = arrayLength(array);
  let result = "";

  for (let i = 0; i < len; i++) {
    result += array[i];
    if (i < len - 1) result += separator;
  }

  return result;
}
