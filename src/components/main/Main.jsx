import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import NewsList from "../news/News-List";
import PageTest from "../news/PageTest";
import Beaches from "../beaches/Beaches";



function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news/:index" element={<PageTest/>} /> 
      <Route path="/beaches" element={<Beaches />} />
      {/* <Route path="/news" element={<NewsList />} /> */}
      
    </Routes>
  );
}

export default Main;
