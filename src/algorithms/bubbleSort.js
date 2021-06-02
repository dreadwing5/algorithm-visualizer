let animation = [];

const bubbleSortHelper = (array) => {
  for (let i = 0; i < array.length; i++) {
    let flag = 0;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        animation.push([j, j + 1, null, null]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        animation.push([j, j + 1, [...array], null]);
        flag = 1;
      }
    }
    if (flag === 0) return;
  }
};

const bubbleSort = (mainArray) => {
  animation = [];
  const helperArray = [...mainArray];
  bubbleSortHelper(helperArray);
  for (let i = 0; i < helperArray.length; i++) {
    animation.push([null, null, null, i]);
  }
  console.log(helperArray);
  return animation;
};

export default bubbleSort;
