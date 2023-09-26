import { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import axios from "axios";
import { CrewMember } from "../../types/crews.d";
import CrewMembers from "./CrewMembers";

const Crew = () => {
  const [crew, setCrew] = useState<CrewMember[]>([]);
  const [onPage, setOnPage] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://apiforplanets-production.up.railway.app/api/get-crew"
        );
        setCrew(response.data);
      } catch (error) {}
    };
    getData();
  }, []);

  useEffect(() => {
    if (location.pathname === "/crew") {
      setOnPage(true);
    } else {
      setOnPage(false);
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="flex w-[240px] m-auto text-white font-[Barlow] justify-between items-center  mt-10 md:w-11/12 md:mt-24 md:justify-start xl:w-[90%]   uppercase">
        <p className="opacity-50 text-[16px] font-[700] tracking-widest">02</p>
        <p className="font-[700] text-[16px] tracking-[5px] md:ml-2">
          Meet your crew
        </p>
      </div>
      <div className=" w-11/12 m-auto text-center grid gap-20 pb-10 mt-20 md:grid-cols-2 xl:grid-cols-4">
        {onPage
          ? crew.map((member) => (
              <Link
                className="text-white grid gap-5"
                key={member.id}
                to={`/crew/` + member.id}
              >
                {" "}
                <img
                  className="w-[200px] h-[222px] m-auto border-b border-white border-opacity-25"
                  src={`https://apiforplanets-production.up.railway.app/${member.images.png}`}
                  alt=""
                />{" "}
                <p>{member.name}</p>
              </Link>
            ))
          : null}
      </div>
      <Routes>
        <Route path="/:id" element={<CrewMembers members={crew} />} />
      </Routes>
    </div>
  );
};

export default Crew;
