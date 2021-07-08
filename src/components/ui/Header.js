import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  Slider,
  Menu,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  toolbarButtons: {
    marginLeft: "auto",
  },
  btn: {
    marginLeft: "10px",
    minWidth: "120px",
  },
  btn1: {
    "&:hover": {
      background: "none",
    },
    marginLeft: "10px",
    padding: "1",
    minWidth: "120px",
  },
}));

const Header = ({
  handleLength,
  handleSpeed,
  handleAlgo,
  generateRandomArray,
  handleSort,
  sorting,
  completed,
  len,
  speed,
  algo,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAlgoHelper = (event) => {
    handleClose();
    const { algo } = event.currentTarget.dataset;
    handleAlgo(algo);
  };
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h1">Algorithm Visualizer</Typography>
          <div className={classes.toolbarButtons}>
            <Button
              variant="contained"
              color="primary"
              className={classes.btn}
              onClick={generateRandomArray}
              disabled={sorting}
            >
              <AddIcon />
              New Array
            </Button>
            <Button
              variant="contained"
              color="primary"
              aria-controls="simple-menu"
              className={classes.btn}
              aria-haspopup="true"
              onClick={handleClick}
              disabled={sorting}
            >
              {algo.replace(/([A-Z])/g, " $1")}
              <ArrowDropDownIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem data-algo="bubbleSort" onClick={handleAlgoHelper}>
                Bubble Sort
              </MenuItem>
              <MenuItem data-algo="insertionSort" onClick={handleAlgoHelper}>
                Insertion Sort
              </MenuItem>
              <MenuItem data-algo="selectionSort" onClick={handleAlgoHelper}>
                Selection Sort
              </MenuItem>
              <MenuItem data-algo="mergeSort" onClick={handleAlgoHelper}>
                Merge Sort
              </MenuItem>
              <MenuItem data-algo="quickSort" onClick={handleAlgoHelper}>
                Quick Sort
              </MenuItem>
            </Menu>

            <Button className={classes.btn1} disableRipple>
              <Typography>Length</Typography>
              <Slider
                aria-labelledby="continuous-slider"
                className={classes.btn}
                color="secondary"
                onChange={handleLength}
                min={20}
                max={100}
                disabled={sorting || completed}
              />
            </Button>
            <Button className={classes.btn1} disableRipple>
              <Typography>Speed</Typography>
              <Slider
                aria-labelledby="continuous-slider"
                className={classes.btn}
                color="secondary"
                onChange={handleSpeed}
                min={1}
                max={10}
                disabled={sorting || completed}
              />
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btn}
              disabled={sorting || completed}
              onClick={handleSort}
            >
              Sort
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
