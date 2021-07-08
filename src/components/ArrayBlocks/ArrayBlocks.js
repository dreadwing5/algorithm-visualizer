import React, { useState, useEffect } from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "80vh",
    minWidth: "90%",
    display: "flex",
    justifyContent: "center",
  },

  block: {
    backgroundColor: "turquoise",
    color: "#282c34",
    fontSize: "10px",
    fontWeight: "bold",
    margin: "0 2px",
    transitionDuration: "150ms",
    transitionProperty: "height",
    transitionTimingFunction: "ease-in",
  },
  text: {
    textAlign: "center",
    fontFamily: `Montserrat, sans-serif`,
    fontWeight: 700,
  },
  dot: {
    height: "20px",
    width: "20px",
    backgroundColor: "#e9c46a",
    borderRadius: "50%",
    display: "inline-block",
  },
  hidden: {
    display: "none",
  },
}));
const ArrayBlocks = ({ blocks, compare, sorted, swap }) => {
  const classes = useStyles();
  const MIN_WIDTH = 20;
  let HEIGHT_FACTOR = 5;
  const [width, setWidth] = useState(
    Math.min(MIN_WIDTH, Math.ceil(window.innerWidth / blocks.length) - 5)
  );
  const color =
    blocks.length <= MIN_WIDTH || width > 16 ? "#264653" : "transparent";

  useEffect(() => {
    setWidth(
      Math.min(MIN_WIDTH, Math.ceil(window.innerWidth / blocks.length) - 8)
    );
  }, [blocks.length]);

  return (
    <div className={classes.root}>
      {blocks.map((block, i) => {
        const height = block * HEIGHT_FACTOR;

        let bg = "#90e0ef";

        // i th element is being compared with some other element
        if (compare && (i === compare[0] || i === compare[1])) {
          bg = "#fee440";
        }

        if (swap && (i === swap[0] || i === swap[1])) {
          bg = "#e76f51";
        }
        // i th element is in its correct position
        if (sorted && sorted.includes(i)) {
          bg = "#ff5c8a";
        }

        const style = {
          backgroundColor: bg,
          color: color,
          height: height,
          width: width,
        };
        return (
          <div key={i} className={classes.block} style={style}>
            <span
              className={
                blocks.length <= MIN_WIDTH || width > 16
                  ? classes.dot
                  : classes.hidden
              }
            >
              <Typography className={classes.text}>{block}</Typography>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ArrayBlocks;
