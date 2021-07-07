let animation = [];

const merge = (array, l, mid, h) => {
  const auxArray = [];
  let i = l,
    j = mid + 1;

  while (i <= mid && j <= h) {
    animation.push([i, j, null, null]); //Push the index to be compared to the animation array

    if (array[i] <= array[j]) {
      auxArray.push(array[i++]);
    } else {
      auxArray.push(array[j++]);
    }
  }

  while (i <= mid) {
    animation.push([i, null, null, null]);
    auxArray.push(array[i++]);
  }

  while (j <= h) {
    auxArray.push(array[j++]);
    animation.push([null, j, null, null]);
  }

  for (i = l; i <= h; i++) {
    array[i] = auxArray[i - l]; //overwritting
    animation.push([i, null, [...array], null]);
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
  animation = []; //Reset Animation array
  const helperArray = [...mainArray];

  mergeSortHelper(helperArray, 0, helperArray.length - 1);

  for (let i = 0; i < helperArray.length; i++) {
    animation.push([null, null, null, i]);
  }

  console.log(animation);
  return animation;
};

// mergeSort([1, 5, 7, 9, 8]);

export default mergeSort;
