<<<<<<< HEAD
import './styles/styles.css';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">

        <Navbar/>
        <Routes>
            
            <Route path='/'></Route>
        </Routes>

      </div>
    </Router>
=======
import React from 'react';
import NewsCards from './components/news/News-Cards';
import NewsList from './components/news/News-List';
import NewsLatest from './components/news/News-Latest';
import NewsSlider from './components/news/News-Latest-Mobile';
import EventsLatest from './components/news/Events';


function App() {
  return (
    <div className="App">
      <NewsList />
    </div>
>>>>>>> news-section
  );
}

export default App;


//{cardNewsEvents.filter((info) => info.tag ==='news').map(info => <CreateNewsCard {...info} />)} 