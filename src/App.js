
import './App.css';
import Header from './Header';
import Headline from './Headline';
import Jumbotron from './images/Jumbotron';
import Navbar from './Navbar';
import Newscard from './Newscard';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Categorypage from './Categorypage';
import Footer from './Footer';
import React from 'react';
import RegisterPage from './RegisterPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<RegisterPage/>} />
          <Route exact path="/category" element={<Categorypage/>} />
        </Routes>
      </Router>
      // <>
      // <Header />
      // <Navbar/>
      // <Headline/>
      // <Home/>
      // <Categorypage/>
      // <Footer/>
      // </>
  );
}

export default App;
