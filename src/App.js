import "./styles/styles.css";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import VideosList from "./components/media-center/Videos-List";
import VideosLatest from "./components/media-center/Videos-Latest";



function App() {
  return (
    <div className="App">
      <Navbar />
      <VideosLatest />
      <Footer/>
    </div>
  );
}

export default App;

//{cardNewsEvents.filter((info) => info.tag ==='news').map(info => <CreateNewsCard {...info} />)}
