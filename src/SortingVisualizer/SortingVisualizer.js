import React, { useState, useEffect } from "react";
import mergeSort from "../algorithms/mergeSort";
import "./SortingVisualizer.css";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const mergeSortArray = () => {
    const sortedArray = mergeSort(array);
    setArray(sortedArray);
  };

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(getRandomInt(5, 580));
    }
    setArray(array);
  };

  return (
    <div className="array-container">
      {array.map((value, idx) => (
        <div
          className="array-bar"
          key={idx}
          style={{ backgroundColor: "turquoise", height: `${value}px` }}
        ></div>
      ))}

      <div className="buttons">
        <button onClick={() => resetArray()}>Generate New Array</button>
        <button onClick={() => mergeSortArray()}>Merge Sort</button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
