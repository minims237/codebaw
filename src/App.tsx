import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation.componennt";

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
