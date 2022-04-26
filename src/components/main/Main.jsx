import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import NewsList from "../news/News-List";
import PageTest from "../news/PageTest";



function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news/:index" element={<PageTest/>} /> 
      {/* <Route path="/news" element={<NewsList />} /> */}
      {/* <Route path="/beaches" element={<Beaches />} /> */}
    </Routes>
  );
}

export default Main;
