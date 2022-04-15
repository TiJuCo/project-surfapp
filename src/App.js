import './App.css';
import CreateNewsCard from './components/news/news-components';
import cardNewsEvents  from './components/news/news-data.jsx';

function App() {
  return (
    <div className="App">

      {cardNewsEvents.filter((info) => info.tag ==='news').map(info => <CreateNewsCard {...info} />)} 
    </div>
  );
}

export default App;
