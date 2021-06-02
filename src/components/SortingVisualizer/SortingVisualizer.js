import React, { useState, useEffect } from "react";
import mergeSort from "../../algorithms/mergeSort";
import quickSort from "../../algorithms/quickSort";

import ArrayBlocks from "../ArrayBlocks/ArrayBlocks";
import "./SortingVisualizer.css";

const generateRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const SortingVisualizer = () => {
  // States
  const [algo, setAlgo] = useState("mergeSort");
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(10);
  const [len, setLength] = useState(100);
  const [sorting, setSorting] = useState(false);
  const [completed, setCompleted] = useState(true);
  const [compare, setCompare] = useState([]); //state changes, component renrender
  const [swap, setSwap] = useState([]);
  const [sortedIndex, setSortedIndex] = useState([]); //What is the use of this array

  //Variables
  //Array value range
  const LOWER_BOUND = 5;
  const UPPER_BOUND = 100;
  // Generating random array every time the length is changed by the user
  const resetArray = (len) => {
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
    resetArray(len);
  }, [len]);

  //Handle Sort animation
  const sortAnimation = async (animation) => {
    for (let i = 0; i < animation.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, speed)); //Set a timer for animation speed
      const [j, k, arr, index] = animation[i];
      setCompare([j, k]); //comapre
      setSwap([]);
      console.log("Comparing");

      if (index !== null) {
        setSortedIndex((prevState) => [...prevState, index]);
      }

      if (arr) {
        console.log("Overwriting New Array");
        setArray(arr);
        if (j !== null || k !== null) setSwap([j, k]);
        console.log("Swapping");
      }
    }
    console.log("Sorting Completed");
    setSorting(false);
    setCompleted(true);
  };

  const handleSort = (algo) => {
    setSorting(true);
    setAlgo(algo);
    switch (algo) {
      case "mergeSort":
        sortAnimation(mergeSort(array));
        break;

      case "quickSort":
        sortAnimation(quickSort(array));
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <ArrayBlocks
        blocks={array}
        compare={sorting && compare}
        swap={sorting && swap}
        sorted={sortedIndex}
      />
      <div className="buttons">
        <button onClick={() => resetArray(len)}>Generate New Array</button>
        <button onClick={() => handleSort("mergeSort")}>Merge Sort</button>
        <button onClick={() => handleSort("quickSort")}>Quick Sort</button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
