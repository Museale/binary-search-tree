export const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let left = arr.slice(0, arr.length / 2);
  let right = arr.slice(left.length, arr.length);
  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  let sortedArray = merge(sortedLeft, sortedRight);

  return sortedArray;

  function merge(left, right) {
    let mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }

    mergedArray = mergedArray.concat(left.slice(leftIndex));
    mergedArray = mergedArray.concat(right.slice(rightIndex));

    return mergedArray;
  }
};
