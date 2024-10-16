import React from "react";
import "./index.css";
import Projects from "./routes/Projects";
import Home from "./routes/Home";
import About from "./routes/About";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;
