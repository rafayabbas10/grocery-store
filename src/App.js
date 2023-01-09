
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

function App() {
  return (
      // <Router>
      //   <Routes>
      //     <Route exact path="/home" element={<Home />} />
      //   </Routes>
      // </Router>
      <>
      <Header />
      <Navbar/>
      <Headline/>
      {/* <Home/> */}
      <Categorypage/>
      <Footer/>
      </>
  );
}

export default App;
