const merge = (array, l, mid, h) => {
  const auxArray = [];
  let i = l,
    j = mid + 1;

  while (i <= mid && j <= h) {
    if (array[i] <= array[j]) {
      auxArray.push(array[i++]);
    } else {
      auxArray.push(array[j++]);
    }
  }

  while (i <= mid) {
    auxArray.push(array[i++]);
  }

  while (j <= h) {
    auxArray.push(array[j++]);
  }

  for (i = l; i <= h; i++) {
    array[i] = auxArray[i - l];
  }
};

const mergeSortHelper = (array, l, h) => {
  if (l >= h) return;

  const mid = Math.floor((l + h) / 2);

  mergeSortHelper(array, l, mid);
  mergeSortHelper(array, mid + 1, h);

  merge(array, l, mid, h);
};

const mergeSort = (mainArray) => {
  const helperArray = [...mainArray];

  mergeSortHelper(helperArray, 0, helperArray.length - 1);

  return helperArray;
};

export default mergeSort;
