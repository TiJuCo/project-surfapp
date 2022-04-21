import "./styles/styles.css";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<NewsList />} />
          {/* <Route path="/beaches" element={<Beaches />} /> */}
        </Routes>
      </div>
  );
}

export default App;


//{cardNewsEvents.filter((info) => info.tag ==='news').map(info => <CreateNewsCard {...info} />)} 