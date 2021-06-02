import "./styles.css";
import { Grid } from "@material-ui/core";
import Header from "./header";
export default function App() {
  return (
    <Grid container direction="column">
      <Header />
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}></Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
}
