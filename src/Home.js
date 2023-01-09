import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Headline from './Headline';
import Jumbotron from './images/Jumbotron';
import Navbar from './Navbar';
import Newscard from './Newscard';
import Onsale from './Onsale';
import PopularItems from './PopularItems';

function Home() {
  return (
    <div className="app">
      <Jumbotron/>
      <Newscard/>
      <Onsale />
      <PopularItems/>
    </div>
  )
}

export default Home