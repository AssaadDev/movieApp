import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React,{useState} from "react";
import {Movie} from './components/movies/movies';
import { Series } from "./components/series/series";
import { SingleContent } from "./components/singleContent/singleContent";
import "./javascriptCss"

function App() {

    const [srch, setSrch] = useState('');

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link id={"movie"} className='navBtn' to="/movies">Movies</Link>
          <Link id={"serie"} className='navBtn' to="/series">Series</Link>
          <input type={"text"} placeholder="Search..." value={srch} onChange={e => setSrch(e.target.value)}/>
        </header>
        <Routes>
          <Route path="/movies" element={<Movie search={srch} _id={1}/>} />
          <Route exat path="/movies/:title" element={<SingleContent type={"movie"} />} />
          <Route exat path="/series" element={<Series search={srch} _id={2}/>}/>
          <Route exat path='/series/:title' element={<SingleContent type={""} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
