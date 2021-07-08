import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import merge from "./merge.jpg";

import selection from "./selection.jpg";
import quick from "./quick.png";
import insert from "./insertion.jpg";
import bubble from "./bubble.jpg";

let sort = [merge, quick, insert, selection, bubble];

const algo = {
  Merge: {
    name: "Merge",
    best: "O ( nlog (n) )",
    worst: "O ( nlog (n) )",
    average: "O ( nlog (n) )"
  },

  Quick: {
    name: "Quick",
    best: "O ( nlog (n) )",
    worst: "O ( n^2 )",
    average: "O ( nlog (n) )"
  },

  Insertion: {
    name: "Insertion",
    worst: "O ( n^2 )",
    average: "O ( n^2 )",
    best: "O ( n )"
  },

  Selection: {
    name: "Selection",
    worst: "O ( n^2 )",
    average: "	Θ ( n^2 )",
    best: "Ω ( n^2 )"
  },

  Bubble: {
    name: "Bubble",
    worst: "O ( n^2 )",
    average: "O (  n^2 )",
    best: "O ( n )"
  }
};

let display = algo.Merge.name;
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

export default function Infobar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography gutterBottom variant="subtitle1">
              {display} Sort
            </Typography>
          </Grid>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={merge} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <h3>Time Complexity</h3>
                <br />

                <Typography gutterBottom variant="title1">
                  Best Case : {algo.Merge.worst}
                </Typography>
                <br />
                <Typography gutterBottom variant="title1">
                  Average Case : {algo.Merge.average}
                </Typography>
                <br />
                <Typography gutterBottom variant="title1">
                  Worst Case : {algo.Merge.worst}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
