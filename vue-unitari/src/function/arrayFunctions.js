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
  let i = len;

  while (1 > 0) {
    array[i] = array[i - 1];
    i--;
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
    array[1] = array[i + 1];
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
  return true;
}
