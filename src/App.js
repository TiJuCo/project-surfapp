import "./styles/styles.css";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import './fonts/fonts.css'

// fonts 
import './fonts/PT-Root-UI/PT-Root-UI_Bold.woff'
import './fonts/PT-Root-UI/PT-Root-UI_Bold.woff2'
import './fonts/PT-Root-UI/PT-Root-UI_Light.woff'
import './fonts/PT-Root-UI/PT-Root-UI_Light.woff'
import './fonts/PT-Root-UI/PT-Root-UI_Medium.woff'
import './fonts/PT-Root-UI/PT-Root-UI_Medium.woff'
import './fonts/PT-Root-UI/PT-Root-UI_Regular.woff'
import './fonts/PT-Root-UI/PT-Root-UI_Regular.woff'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;

//{cardNewsEvents.filter((info) => info.tag ==='news').map(info => <CreateNewsCard {...info} />)}
