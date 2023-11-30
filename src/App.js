import "./App.css";
import { ThemeProvider } from "react-bootstrap";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Home />
    </ThemeProvider>
  );
}

export default App;
