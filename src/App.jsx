import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Messages from "./pages/Messages";
import Cards from "./pages/Cards";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cards" element={<Cards />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/messages" element={<Messages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
