import "./styles/styles.css";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

//{cardNewsEvents.filter((info) => info.tag ==='news').map(info => <CreateNewsCard {...info} />)}
