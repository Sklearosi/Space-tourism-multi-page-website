import Header from "./components/header/Header";
import { Routes, Route} from 'react-router-dom';
import Home from "./components/home/Home";
import { useEffect, useState } from "react";
import Destination from "./components/destination/Destination";

function App() {
  const [size, setSize] = useState<string>("mobile");
  

  useEffect(() => {
    updateMedia();

    window.addEventListener("resize", updateMedia);

    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  }, []);

  const updateMedia = () => {
    if (window.innerWidth < 768) {
      setSize("mobile");
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setSize("tablet");
    } else if (window.innerWidth >= 1024) {
      setSize("desktop");
    }
  };

  
  const initialPage = localStorage.getItem("currentPage") || "home";
  const [page, setPage] = useState<string>(initialPage);

  
  useEffect(() => {
    localStorage.setItem("currentPage", page);
  }, [page]);

  return (
    <div style={{backgroundImage : `url(/assets/background-${page}-${size}.jpg)`}} className=" h-[100vh] bg-no-repeat bg-cover overflow-x-hidden relative">
      <Header page={page} setPage={setPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/*" element={<Destination />} />
      </Routes>
    </div>
  );
}

export default App;