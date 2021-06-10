import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Form from './components/Form';
import Graph from './components/LineGraph';

function App() {
  return (
    <div className="App">
      <Graph />
      <Form />
    </div>
  );
}

// TODO: add redux

export default App;
