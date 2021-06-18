import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Router } from "react-router";

import Form from './components/Form';
import Graph from './components/LineGraph';
import Navbar from "./components/Navbar/Navbar";
import Totals from "./components/Totals";
import Homepage from "./components/Homepage/Homepage"

function App() {
  const paths = ["/home", "/year", "/country", "/totals/world"]

  return (
    <BrowserRouter>
    {!paths.includes(window.location.pathname) ? <Redirect to="/home" /> : null}
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
    </BrowserRouter>
  );
}

// TODO: make responsive

export default App;
