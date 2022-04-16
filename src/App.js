import './App.css';
import Carousel from './components/news/Carousel';
import React from 'react';

function App() {
  return (
    <div className="App">
     <Carousel /> 
      
    </div>
  );
}

export default App;


//{cardNewsEvents.filter((info) => info.tag ==='news').map(info => <CreateNewsCard {...info} />)} 