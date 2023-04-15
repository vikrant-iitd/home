import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
// import { useRef } from 'react';
import { Footer } from './Footer';
import { Content } from './Content';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Publications from './components/Publications';

function App() {
  return (
    // <div style={{ fontFamily: 'Quicksand', fontWeight: '600' }}>
    //   <Header />
    //   <Content/>
    //   <Footer />
    // </div>
    <>
     <Router>
      <Header/>
     <Routes>
       <Route exact path="/" element={<Content/>} />
       <Route path="/publications" element={<Publications/>}/>
     </Routes>
     <Footer/>
     </Router>
    </>

  );
}

export default App;
