import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Cards from "./pages/Cards";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cards" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
