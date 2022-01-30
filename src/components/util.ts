export function compareObjectsByKey<T>(key: keyof T, ascending = true) {
  return function innerSort(objectA: T, objectB: T) {
    const sortValue =
      objectA[key] > objectB[key] ? 1 : objectA[key] < objectB[key] ? -1 : 0;
    return ascending ? sortValue : -1 * sortValue;
  };
}
