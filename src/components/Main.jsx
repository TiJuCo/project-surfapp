import "./styles/styles.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function Main() {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsList />} />
          {/* <Route path="/beaches" element={<Beaches />} /> */}
        </Routes>
  );
}

export default Main;