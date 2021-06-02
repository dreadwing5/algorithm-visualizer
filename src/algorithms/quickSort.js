let animation = [];

const partition = (array, l, h) => {
  let i = l - 1;
  let random = Math.floor(Math.random() * (h - l) + l);
  [array[random], array[h]] = [array[h], array[random]];
  let pivot = array[h];

  for (let j = l; j <= h - 1; j++) {
    if (array[j] <= pivot) {
      animation.push([j, h, null, null]);
      //comparing
      i++;
      [array[i], array[j]] = [array[j], array[i]]; //swap i with j
      animation.push([i, j, [...array], null]);
    }
  }
  [array[i + 1], array[h]] = [array[h], array[i + 1]];
  animation.push([i + 1, h, [...array], null]); //final swap
  return i + 1;
};

const quickSortHelper = (array, l, h) => {
  if (l <= h) {
    let q = partition(array, l, h);
    quickSortHelper(array, l, q - 1);
    quickSortHelper(array, q + 1, h);
  }
};

const quickSort = (mainArray) => {
  animation = []; //Reset the array
  const helperArray = [...mainArray];
  quickSortHelper(mainArray, 0, mainArray.length - 1);
  for (let i = 0; i < helperArray.length; i++) {
    animation.push([null, null, null, i]);
  }
  return animation;
};

export default quickSort;
