import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import News from "../news/News";
import { ArticlesData } from "../news/NewsData";
import {NewsPageCard} from "../news/NewsPage";
import PageTest from "../news/PageTest";



function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news/:index" element={<NewsPageCard ArticlesData={ArticlesData} />} /> 
      <Route path="/news" element={<News/>} /> 
      {/*<Route path="/news/:newsPage" element={<NewsPage/>} />*/}
      {/* <Route path="/news" element={<NewsList />} /> */}
      {/* <Route path="/beaches" element={<Beaches />} /> */}
    </Routes>
  );
}

export default Main;
