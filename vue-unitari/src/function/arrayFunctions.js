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
export function arrayUnshift