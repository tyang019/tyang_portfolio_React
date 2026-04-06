import './App.css';
import { Navigate, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import About from './components/About';

function App() {

  return (
    <>
      <Header/>
      <Navigation/>
      <Intro/>
      <About />
      
      {/* <Routes>
        <Route path="/home" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}

    </>
  )
}

export default App
