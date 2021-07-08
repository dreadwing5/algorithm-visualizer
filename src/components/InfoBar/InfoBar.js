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
  },

  quickSort: {
    name: "Quick",
    best: "O ( nlog (n) )",
    worst: "O ( n^2 )",
    average: "O ( nlog (n) )",
    img: quick,
  },

  insertionSort: {
    name: "Insertion",
    worst: "O ( n^2 )",
    average: "O ( n^2 )",
    best: "O ( n )",
    img: insertion,
  },

  selectionSort: {
    name: "Selection",
    worst: "O ( n^2 )",
    average: "	Θ ( n^2 )",
    best: "Ω ( n^2 )",
    img: selection,
  },

  bubbleSort: {
    name: "Bubble",
    worst: "O ( n^2 )",
    average: "O (  n^2 )",
    best: "O ( n )",
    img: bubble,
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  image: {
    width: 500,
    height: 500,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
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
            <h3>Analysis</h3>
            <br />
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column">
              <Grid item xs>
                <h3>Time Complexity</h3>
                <br />

                <Typography gutterBottom variant="title1">
                  Best Case : {algorithms[algo].best}
                </Typography>
                <br />
                <Typography gutterBottom variant="title1">
                  Average Case : {algorithms[algo].average}
                </Typography>
                <br />
                <Typography gutterBottom variant="title1">
                  Worst Case : {algorithms[algo].worst}
                </Typography>
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
