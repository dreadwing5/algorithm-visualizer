const partition = (array, l, h) => {
  let i = l - 1;
  let random = Math.floor(Math.random() * (h - l) + l);
  [array[random], array[h]] = [array[h], array[random]];
  let pivot = array[h];

  for (let j = l; j <= h - 1; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]]; //swap i with j
    }
  }
  [array[i + 1], array[h]] = [array[h], array[i + 1]];
  return i + 1;
};

const quickSort = (array, l, h) => {
  if (l <= h) {
    let q = partition(array, l, h);
    quickSort(array, l, q - 1);
    quickSort(array, q + 1, h);
  }
};

const array = [2, 8, 7, 1, 3, 5, 6, 4];
quickSort(array, 0, array.length - 1);
console.log(array);
