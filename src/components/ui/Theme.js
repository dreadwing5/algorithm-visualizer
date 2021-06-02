import { createMuiTheme } from "@material-ui/core/styles";

const customBlue = "#0B72B9";
const customLight = "#ffffff";
const customDark = "#264653";
export default createMuiTheme({
  palette: {
    common: {
      blue: `${customBlue}`,
    },
    primary: {
      main: `${customLight}`,
    },
    secondary: {
      main: `${customDark}`,
    },
  },
  typography: {
    h1: {
      fontSize: "1.7rem",
      fontFamily: `Montserrat, sans-serif`,
      fontWeight: 700,
      color: `${customDark}`,
    },
  },
});
