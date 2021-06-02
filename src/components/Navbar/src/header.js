import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core";
import SplitButton from "./splitButton";
import React from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";
const useStyles = makeStyles(() => ({
  typographystyles: {
    flex: 1
  },
  buttonstyles: {
    color: "white",
    fullWidth: false
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographystyles}>
          Algorithm Visualizer
        </Typography>
        <SplitButton />
        <Button className={classes.buttonstyles}>New Array</Button>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
