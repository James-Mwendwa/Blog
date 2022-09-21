import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Create from "./Create";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
