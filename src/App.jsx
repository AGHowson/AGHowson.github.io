import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import PokemonDetail from "./pages/PokemonDetail";
import SearchResult from "./pages/SearchResult";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <div className="py-5">
        <h1><Link to="/" href="#">PokéDex</Link></h1>
        <h1><Link to="/about" href="#">About</Link></h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search=:query" element={<SearchResult />} />
          <Route path="/:name" element={<PokemonDetail/>}/>
        </Routes>
      </div>

    </div>
  )
}


export default App
