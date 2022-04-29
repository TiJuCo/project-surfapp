import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Beaches from "../beaches/Beaches";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beaches" element={<Beaches />} />
    </Routes>
  );
}

export default Main;
