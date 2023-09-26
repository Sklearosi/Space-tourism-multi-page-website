import { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import axios from "axios";
import Planets from "./Planets";
import { DestinationType } from "../../types/destination.d";

const Destination = () => {
  const [destInfo, setDestInfo] = useState<DestinationType[]>([]);
  const [onPage, setOnPage] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://apiforplanets-production.up.railway.app/api/get-destinations"
        );
        setDestInfo(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  
  useEffect(() => {
    if (location.pathname === "/destination") {
      setOnPage(true);
    } else {
      setOnPage(false);
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="flex w-[280px] m-auto text-white font-[Barlow] justify-between items-center  mt-10 md:w-11/12 md:mt-24 md:justify-start xl:w-9/12">
        <p className="opacity-50 text-[16px] font-[700] tracking-widest">01</p>
        <p className="font-[700] text-[16px] tracking-[5px] md:ml-2">
          Pick your destination
        </p>
      </div>
      <div>
        
        {destInfo.length > 0 && ( 
          <Routes>
            <Route
              path={`/:name`}
              element={<Planets destinations={destInfo} />}
            />
          </Routes>
        )}
        {onPage ?  <ul className=" grid text-center gap-10 mt-10 mb-10 md:grid-cols-2 md:mt-24 xl:grid-cols-4 xl:mt-[200px]">
          {destInfo.map((destination) => (
            <Link onClick={() => {
              setOnPage(false)
            }} to={`/destination/${destination.name}`} className=" text-white grid gap-4" key={destination.id}>
              <img src={`https://apiforplanets-production.up.railway.app/${destination.images.png}`} alt=""  className=" w-[170px] h-[170px] m-auto "/>
              <p >
                {destination.name}
              </p>
            </Link>
          ))}
        </ul> : null}
      </div>
    </div>
  );
};

export default Destination;