export function same(arr1, arr2) {
  let memo1 = {};
  let memo2 = {};
  if (arr1.length !== arr2.length) return false;

  arr1.forEach((value1, i) => {
    memo1[value1] = ++memo1[value1] || 1;
    memo2[arr2[i]] = ++memo2[arr2[i]] || 1;
  });

  for (const value1 of arr1) {
    if (
      !(
        memo2.hasOwnProperty(value1 * value1) &&
        memo2[value1 * value1] === memo1[value1]
      )
    )
      return false;
  }
  return true;
}
