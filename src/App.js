import "./styles/styles.css";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApiContextProvider } from "./contexts/ApiContext";
import Main from "./components/main/Main";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ApiContextProvider>
        <Main />
      </ApiContextProvider>
      <Footer />
    </div>
  );
}

export default App;

//{cardNewsEvents.filter((info) => info.tag ==='news').map(info => <CreateNewsCard {...info} />)}
