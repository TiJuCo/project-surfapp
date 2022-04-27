import "./styles/styles.css";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import NewsPage from "./components/news/News-Page";
import NewsList from "./components/news/News-List";
import Home from "./components/Home";
import ImgGallery from "./components/news/ImgGallery";

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <ImgGallery />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

//{cardNewsEvents.filter((info) => info.tag ==='news').map(info => <CreateNewsCard {...info} />)}
