import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { useRef } from 'react';
import { Footer } from './Footer';
import { Content } from './Content';

function App() {
  return (
    <div style={{ fontFamily: 'Quicksand', fontWeight: '600' }}>
      <Header />
      <Content/>
      <Footer />
    </div>

  );
}

export default App;
