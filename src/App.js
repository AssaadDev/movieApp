import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React,{useState} from "react";

function App() {

    const [srch, setSrch] = useState('');
    //console.log(value);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/movies">Movies</Link>
          <Link to="/series">Series</Link>
          <input type={"text"} placeholder="Search..." value={srch} onChange={e => setSrch(e.target.value)}/>
        </header>
        <Routes>
          <Route path="/movies" />
          <Route exat path="/movies/${id}" />
          <Route exat path="/series" />
          <Route exat path='/series/${id}' />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
