import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PageInputs from "./pages/Inputs";
import PageCards from "./pages/Cards";
import PageHome from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<PageHome />} />
          <Route exact path="/cards" element={<PageCards />} />
          <Route exact path="/input" element={<PageInputs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
