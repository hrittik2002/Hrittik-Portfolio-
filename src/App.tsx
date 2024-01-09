import React, { useEffect, useState } from "react";
import "./App.css";
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ABOUT_PAGE, HOME_PAGE, PROJECT_PAGE, RESUME_PAGE } from "./routes";
import HomePage from "./Page/HomePage";
import NavBar from "./Components/UI/Navbar";
import ScrollToTop from "./Components/UI/ScrollToTop";
import Footer from "./Components/UI/Footer";
import AboutPage from "./Page/AboutPage";
import ProjectPage from "./Page/ProjectPage";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage/>}/>
        <Route path={PROJECT_PAGE} element={<ProjectPage/>}/>
        <Route path={ABOUT_PAGE} element={<AboutPage/>}/>
        <Route path={RESUME_PAGE} element={<>Home</>}/>
        <Route path="*" element={<Navigate to={HOME_PAGE}/>}/>
        
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
