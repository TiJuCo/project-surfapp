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
  );
}

export default App;


//{cardNewsEvents.filter((info) => info.tag ==='news').map(info => <CreateNewsCard {...info} />)} 