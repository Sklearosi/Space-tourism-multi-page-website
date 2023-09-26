import { useState, useEffect } from "react";
import { TechnologyItem } from "../../types/technology.d";
import axios from "axios";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import TechStack from "./TechStack";

const Technology = () => {
  const [technology, setTechnology] = useState<TechnologyItem[]>([]);
  const [onPage, setOnPage] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://apiforplanets-production.up.railway.app/api/get-technology"
        );
        setTechnology(response.data);
      } catch (error) {
      }
    };
    getData();
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/technology") { 
      setOnPage(true);
    } else {
      setOnPage(false);
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="flex w-[250px] m-auto text-white font-[Barlow] justify-between items-center  mt-10 md:w-11/12 md:mt-24 md:justify-start xl:w-[90%]   uppercase">
        <p className="opacity-50 text-[16px] font-[700] tracking-widest">03</p>
        <p className="font-[700] text-[16px] tracking-[5px] md:ml-2">SPACE LAUNCH 101</p>
      </div>
      {onPage ? (
        <div className="w-10/12 m-auto grid gap-10 mt-6 xl:grid-cols-3 xl:mt-[150px]">
          {technology.map((tech) => (
            <Link
              key={tech.id}
              to={`/technology/` + tech.id}
              style={{
                background: `url("https://apiforplanets-production.up.railway.app/${tech.images.landscape}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full h-[200px] bg-center bg-no-repeat flex justify-center items-center text-white text-[30px] font-[Bellefair] tracking-[5px] rounded-md xl:h-[300px]"
            >
              <p>{tech.name}</p>
            </Link>
          ))}
        </div>
      ) : null}
      <Routes>
        <Route path="/:id" element={<TechStack techies={technology} />} />
      </Routes>
    </div>
  );
};

export default Technology;