import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from './components/Form';
import Graph from './components/LineGraph';
import Navbar from "./components/Navbar/Navbar";
import Totals from "./components/Totals";
import Homepage from "./components/Homepage/Homepage"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/home">
          <Homepage />
        </Route>
        <Route path="/year">
          <Graph />
        </Route>
        <Route path="/country">
          <Form />
        </Route>
        <Route path="/totals/world">
          <Totals />
        </Route>
      </div>
    </Router>
  );
}

// TODO: style
// TODO: make more intuitive
// TODO: make responsive

export default App;
