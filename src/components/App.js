import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
import Header from "./ui/Header";
import "./App.css";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SortingVisualizer />
    </ThemeProvider>
  );
}

export default App;
