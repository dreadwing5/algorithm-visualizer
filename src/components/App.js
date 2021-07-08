import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
/* import SortingVisualizer from "./SortingVisualizer/SortingVisualizer"; */
import Header from "./ui/Header";
import "./App.css";
import mergeSort from "./algorithms/mergeSort";
import quickSort from "./algorithms/quickSort";
import bubbleSort from "./algorithms/bubbleSort";

import ArrayBlocks from "./ArrayBlocks/ArrayBlocks";
import Legends from "./ui/Legends";
import InfoBar from "./InfoBar/InfoBar";

const generateRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min); //Generate array in interval
};

function App() {
  const [algo, setAlgo] = useState("mergeSort");
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(1);
  const [len, setLength] = useState(20);
  const [sorting, setSorting] = useState(false);
  const [completed, setCompleted] = useState(true);
  //Animation
  const [compare, setCompare] = useState([]); //state changes, component renrender
  const [swap, setSwap] = useState([]);
  const [sortedIndex, setSortedIndex] = useState([]); //What is the use of this array
  const [timeoutIds, setTimeoutIds] = useState([]);

  //Variables
  //Array value range
  const LOWER_BOUND = 5;
  const UPPER_BOUND = 100;
  // Generating random array every time the length is changed by the user
  const generateRandomArray = (len) => {
    setCompleted(false);
    setSorting(false);
    setSortedIndex([]);
    const tempArray = Array.from({ length: len }, () =>
      generateRandomInt(LOWER_BOUND, UPPER_BOUND)
    );
    // console.log(tempArray);
    setArray(tempArray);
  };

  useEffect(() => {
    generateRandomArray(len);
  }, [len, algo]);

  const handleLength = (event, value) => {
    setLength(value);
  };

  // handling the speed of sorting
  const handleSpeed = (event, value) => {
    setSpeed(10 / value);
  };

  const handleAlgo = (algo) => {
    setAlgo(algo);
  };

  const clearTimeOut = () => {
    timeoutIds.forEach((timeoutId) => {
      clearTimeout(timeoutId);
    });
    setTimeoutIds([]);
  };

  function delay(milisec) {
    return new Promise((resolve) => {
      let timeoutId = setTimeout(() => {
        resolve("");
      }, milisec);
      setTimeoutIds([...timeoutIds, timeoutId]);
    });
  }

  //Handle Sort animation
  const sortAnimation = async (animation) => {
    for (let i = 0; i < animation.length; i++) {
      await delay(speed);
      console.log("speed=>", speed); //Set a timer for animation speed
      const [j, k, arr, index] = animation[i];
      setCompare([j, k]); //comapre
      setSwap([]);
      // console.log("Comparing");

      if (index !== null) {
        setSortedIndex((prevState) => [...prevState, index]); //Render the ui
      }

      if (arr) {
        // console.log("Overwriting New Array");
        setArray(arr);
        if (j !== null || k !== null) setSwap([j, k]);
        // console.log("Swapping");
      }
    }
    // console.log("Sorting Completed");
    setSorting(false);
    setCompleted(true);
  };

  const handleSort = () => {
    setSorting(true);
    console.log("Sorting");
    clearTimeOut();
    switch (algo) {
      case "mergeSort":
        sortAnimation(mergeSort(array));
        break;

      case "quickSort":
        sortAnimation(quickSort(array));
        break;

      case "bubbleSort":
        sortAnimation(bubbleSort(array));
        break;

      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Header
        generateRandomArray={() => generateRandomArray(len)}
        handleLength={handleLength}
        handleSpeed={handleSpeed}
        handleSort={handleSort}
        handleAlgo={handleAlgo}
        sorting={sorting}
        completed={completed}
        len={len}
        speed={speed}
        algo={algo}
      />
      <ArrayBlocks
        blocks={array}
        compare={sorting && compare}
        swap={sorting && swap}
        sorted={sortedIndex}
      />
      <Legends algo={algo} />
      <InfoBar algo={algo} />
    </ThemeProvider>
  );
}

export default App;
