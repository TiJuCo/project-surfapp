import './App.css';
import Carousel from './components/news/Carousel';
import React from 'react';
import CreateCards from './components/news/News-cards';
import CreateNewsGrid from './components/news/News-grid';

function App() {
  return (
    <div className="App">
      <CreateNewsGrid/>
    </div>
  );
}

export default App;


//{cardNewsEvents.filter((info) => info.tag ==='news').map(info => <CreateNewsCard {...info} />)} 