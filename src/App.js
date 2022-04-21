import './App.css';
import React from 'react';
import NewsCards from './components/news/News-Cards';
import NewsList from './components/news/News-List';
import NewsLatest from './components/news/News-Latest';
import NewsSlider from './components/news/News-Latest-Mobile';
import EventsLatest from './components/news/Events';


function App() {
  return (
    <div className="App">
      <EventsLatest />
    </div>
  );
}

export default App;


//{cardNewsEvents.filter((info) => info.tag ==='news').map(info => <CreateNewsCard {...info} />)} 