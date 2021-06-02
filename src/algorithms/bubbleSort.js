let animation = [];

const bubbleSortHelper = (array) => {
  for (let i = 0; i < array.length; i++) {
    let flag = 0;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        animation.push(i, j, null, null);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        animation.push(i, j, [...array], null);
        flag = 1;
      }
      if (flag === 0) return;
    }
  }
};

const bubbleSort = (mainArray) => {
  const helperArray = [...mainArray];
  bubbleSortHelper(helperArray);
  for (let i = 0; i < helperArray.length; i++) {
    animation.push(null, null, null, i);
  }

  return animation;
};

export default bubbleSort;
