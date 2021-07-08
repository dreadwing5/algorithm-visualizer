import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

import merge from "./merge.jpg";
import selection from "./selection.jpg";
import quick from "./quick.png";
import insertion from "./insertion.jpg";
import bubble from "./bubble.jpg";

const algorithms = {
  mergeSort: {
    name: "Merge",
    best: "O ( nlog (n) )",
    worst: "O ( nlog (n) )",
    average: "O ( nlog (n) )",
    img: merge,
    description: (
      <div>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Merge_sort"
            target="_blank"
            rel="noopener noreferrer"
          >
            Merge Sort
          </a>{" "}
          is an efficient, stable sorting algorith that makes use of the divide
          and conquer strategy. Conceptually the algorithm works as follows:
        </p>
        <ol>
          <li>
            Divide the unsorted list into <em>n</em> sublists, each containing
            one element(a list of one element is considered sorted)
          </li>
          <li>
            Repeatedly merge sublists to produce new sorted sublists until there
            is only one sublist remaining. This will be the sorted list.
          </li>
        </ol>
      </div>
    )
  },

  quickSort: {
    name: "Quick",
    best: "O ( nlog (n) )",
    worst: "O ( n^2 )",
    average: "O ( nlog (n) )",
    img: quick,
    description: (
        <div>
          <p>
            <a
              href="https://en.wikipedia.org/wiki/Quicksort"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quick Sort
            </a>{' '}
            is an efficient, in-place sorting algorith that in practice is
            faster than MergeSort and HeapSort. However, it is not a stable
            sorting algorithm, meaning that the relative positioning of
            equal sort items is not preserved.Quicksort is a divide and
            conquer algorithm. Quicksort first divides a large array into
            two smaller sub-arrays: the low elements and the high elements.
            Quicksort can then recursively sort the sub-arrays. The steps
            are:
          </p>
          <ol>
            <li>
              Pick an element, called a pivot, from the array. This is
              usually done at random.
            </li>
            <li>Move pivot element to the start of the array.</li>
            <li>
              <em>Partitioning:</em> reorder the array so that all elements
              with values less than the pivot come before the pivot, while
              all elements with values greater than the pivot come after it
              (equal values can go either way). After this partitioning, the
              pivot is in its final position. This is called the{' '}
              <em>partition</em> operation.
            </li>
            <li>
              Recursively apply the above steps to the sub-array of elements
              with smaller values and separately to the sub-array of
              elements with greater values.
            </li>
          </ol>
          <p>
            The base case of the recursion is an array of size zero or one,
            which are sorted by definition.
          </p>
        </div>
      )
  },

  insertionSort: {
    name: "Insertion",
    worst: "O ( n^2 )",
    average: "O ( n^2 )",
    best: "O ( n )",
    img: insertion,
    description: (
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Insertion_sort"
            target="_blank"
            rel="noopener noreferrer"
          >
            Insertion Sort
          </a>{' '}
          is a simple sorting algorithm that iterates through an array and
          at each iteration it removes one element from the array, finds the
          location it belongs to in the sorted list and inserts it there,
          repeating until no elements remain in the unsorted list. It is an
          in-place, stable sorting algorithm that is inefficient on large
          input arrays but works well for data sets that are almost sorted.
          It is more efficient in practice compared to other quadratic
          sorting algorithms like bubble sort and selection sort.
        </p>
      )
  },

  selectionSort: {
    name: "Selection",
    worst: "O ( n^2 )",
    average: "	Θ ( n^2 )",
    best: "Ω ( n^2 )",
    img: selection,
    description: (
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Selection_sort"
            target="_blank"
            rel="noopener noreferrer"
          >
            Selection Sort
          </a>{' '}
          is an in-place comparison sorting algorithm that divides the input
          list into two parts: the sublist of items already sorted, which is
          built up from left to right at the front (left) of the list, and
          the sublist of items remaining to be sorted that occupy the rest
          of the list. Initially, the sorted sublist is empty and the
          unsorted sublist is the entire input list. The algorithm proceeds
          by finding the smallest element in the unsorted sublist,
          exchanging (swapping) it with the leftmost unsorted element
          (putting it in sorted order), and moving the sublist boundaries
          one element to the right.
        </p>
      )
  },

  bubbleSort: {
    name: "Bubble",
    worst: "O ( n^2 )",
    average: "O (  n^2 )",
    best: "O ( n )",
    img: bubble,
    description: (
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Bubble_sort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bubble Sort
        </a>{" "}
        is a simple sorting algorithm that repeatedly steps through the list,
        compares adjacent elements and swaps them if they are in the wrong
        order.The pass through the list is repeated until the list is sorted.
        The algorithm, which is a comparison sort, is named for the way smaller
        or larger elements "bubble" to the top of the list. Although the
        algorithm is simple, it is too slow and impractical for most problems
      </p>
    )
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto"
  },
  image: {
    width: 500,
    height: 500
  },

  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function Infobar({ algo }) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          {/* <Grid item>
            <Typography gutterBottom variant="subtitle1">
              {display} Sort
            </Typography>
          </Grid> */}
          <Grid item xs={6} sm container>
            <h2>Analysis</h2>
            <br />
            {algorithms[algo].description}

            <h4>Time Complexity</h4>
            <br />

            <Typography gutterBottom variant="title1"></Typography>
            <br />
            <Typography gutterBottom variant="title1">
              Best Case : {algorithms[algo].best} | Average Case :
              {algorithms[algo].average} | Worst Case : {algorithms[algo].worst}
            </Typography>
            <br />
            <Typography gutterBottom variant="title1"></Typography>
          </Grid>

          <Grid item xs={6} sm container>
            <Grid item xs container direction="column">
              <Grid item xs>
                <img
                  className={classes.img}
                  alt="complex"
                  src={algorithms[algo].img}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
