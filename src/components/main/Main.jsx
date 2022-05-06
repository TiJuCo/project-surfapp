import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Beaches from "../beaches/Beaches";
import News from "../news/News";
import { ArticlesData } from "../news/NewsData";
import NewsPage, { NewsPageCard } from "../news/NewsPage";
import BeachPage from "../beaches/BeachPage/BeachPage";
import PageTest from "../news/PageTest";



function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beaches" element={<Beaches />} />
      <Route path="/beaches/:beachName" element={<BeachPage />} /> 
      <Route path="/news/:index" element={<NewsPageCard ArticlesData={ArticlesData} />} /> 
      <Route path="/news" element={<News/>} /> 
      {/*<Route path="/news/:newsPage" element={<NewsPage/>} />*/}
      {/* <Route path="/news" element={<NewsList />} /> */}
      {/* <Route path="/beaches" element={<Beaches />} /> */}
    </Routes>
  );
}

export default Main;
