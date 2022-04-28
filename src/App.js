import "./styles/styles.css";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Videos from "./components/media-center/Videosl";
import Carousel from "./components/media-center/Carousel";
import CarouselMobile from "./components/media-center/CarouselMobile";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel/>
      <CarouselMobile/>
      <Footer/>
    </div>
  );
}

export default App;

//{cardNewsEvents.filter((info) => info.tag ==='news').map(info => <CreateNewsCard {...info} />)}
