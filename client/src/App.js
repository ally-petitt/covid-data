import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from './components/Form';
import Graph from './components/LineGraph';
import Navbar from "./components/Navbar/Navbar";
import Totals from "./components/Totals";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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

// TODO: make homepage
// TODO: style
// TODO: fix graph bug (where it only loads on screen resize)
// TODO: make more intuitive

export default App;
