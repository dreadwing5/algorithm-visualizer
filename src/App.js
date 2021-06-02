import "./App.css";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
// import "./styles.css";
// import { Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <SortingVisualizer />
    </div>
  );
}

export default App;
