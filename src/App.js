
import './App.css';
import Header from './Header';
import Headline from './Headline';
import Jumbotron from './images/Jumbotron';
import Navbar from './Navbar';
import Newscard from './Newscard';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar/>
      <Headline/>
      <Jumbotron/>
      <Newscard/>
    </div>
  );
}

export default App;
