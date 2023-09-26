import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { DestinationType } from "../../types/destination.d";


const Planets: React.FC<{ destinations: DestinationType[] }> = ({
  destinations,
}) => {
    const location = useLocation();
    const { name } = useParams<{ name: string }>();

    const selectedDestination = destinations.find(
      (destination) => destination.name === name
    );
    
  

  return (
    <div>
      {selectedDestination ? (
        <div className="mt-10 w-[70%] m-auto xl:flex xl:w-[75%] xl:justify-between xl:items-center xl:mt-20">
          <img src={`https://apiforplanets-production.up.railway.app/${selectedDestination.images.png}`} alt=""  className=" w-[170px] h-[170px] m-auto md:w-[300px] md:h-[300px] md:mt-10 xl:w-[435px] xl:h-[435px]"/>
          <div className=" mt-5 w-[40%]">
            <div className=" border-b border-white pb-10 xl:pb-24">
        <ul className=" flex w-[237px] justify-between pb-3 m-auto xl:w-[285px] xl:justify-start xl:gap-10 xl:m-0">
          {destinations.map((planetName) => (
            <Link   to={`/destination/${planetName.name}`} className={` text-white ${location.pathname===`/destination/${planetName.name}` ? " border-b-[3px] border-white" : ""} pb-3`} key={planetName.id}>
              <p>
                {planetName.name}
              </p>
            </Link>
          ))}
        </ul>
            <h1 className=" uppercase text-[56px] font-[400] font-[Bellefair] text-white text-center mt-2 xl:mt-10">{selectedDestination.name}</h1>
            <p className=" text-[15px] text-center font-[400] font-[Bellefair] opacity-90 text-white mt-3 xl:text-left">{selectedDestination.description}</p>
            </div>
            <div className=" text-white text-center font-[Bellefair] grid gap-6 mt-7 mb-10 md:flex md:justify-evenly xl:text-left">
            <div>
            <p className=" text-[14px] font-[400] opacity-80 text-[#D0D6F9] ">AVG. DISTANCE</p>
            <p className=" font-[400] text-[28px] ">{selectedDestination.distance}</p>
            </div>
            <div>
            <p className=" text-[14px] font-[400] opacity-80 text-[#D0D6F9] uppercase">Est. travel time</p>
            <p className=" font-[400] text-[28px] ">{selectedDestination.travel}</p>
            </div>
            </div>
          </div>
        </div>
      ) : (
        <p className=" text-white">Destination not found</p>
      )}
    </div>
  );
};

export default Planets;