import Navigate from "./config/navigate";
import {HashRouter as Router  } from 'react-router-dom'
import Navbar from "./navbar";
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />         
      <Navigate />
    </Router>
    </div>
  );
}

export default App;
