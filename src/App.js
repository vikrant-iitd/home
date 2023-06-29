import "./App.css";
import { Header } from "./components/Header";
// import { useRef } from 'react';
import { Footer } from "./Footer";
import { Content } from "./Content";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Publications from "./components/Publications";
import { Home } from "./components/Home";
import { Team } from "./pages/Team";
import { Project } from "./pages/Project";
import { Experience } from "./pages/Experience";
import { Course } from "./pages/Course";
import { Gallery } from "./pages/Gallery";

function App() {
  return (
    // <div style={{ fontFamily: 'Quicksand', fontWeight: '600' }}>
    //   <Header />
    //   <Content/>
    //   <Footer />
    // </div>
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/q" element={<Content />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
