import { Link, useParams } from "react-router-dom";
import { TechnologyItem } from "../../types/technology.d";

const TechStack: React.FC<{ techies: TechnologyItem[] }> = ({ techies }) => {
  const { id } = useParams<{ id: string }>();
  const selectedTech = techies.find((techss) => techss.id === id);

  if (!selectedTech) {
    return <p className="text-white">Crew member not found</p>;
  }

  return (
    <div>
      <div className="mt-5 xl:flex xl:justify-center items-center">
        <div 
        style={{
          backgroundImage: `url("https://apiforplanets-production.up.railway.app/${selectedTech.images.portrait}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize:"cover",
          backgroundPosition: "center"
          }}
        className="w-full h-[170px] bg-cover bg-center bg-no-repeat md:h-[310px] xl:h-[527px] xl:order-2"></div>
        <div className=" xl:flex xl:justify-center items-center ">
          <div className="w-[152px] m-auto flex text-black justify-between mt-5 xl:grid xl:gap-5">
            {techies.map((techh) => (
              <Link
              
                key={techh.id}
                className={`w-10 h-10 xl:w-20 xl:h-20 rounded-full flex justify-center items-center ${
                  id === techh.id
                    ? "bg-white"
                    : "border border-white text-white"
                }`}
                to={`/technology/` + techh.id}
              >
                {techh.id}
              </Link>
            ))}
          </div>
          <div className=" w-[50%] m-auto text-center text-white mt-8  xl:text-left">
            <p className=" text-[13px] opacity-50 font-[400] tracking-[1px] font-[Barlow] xl:text-[16px] ">THE TERMINOLOGY…</p>
            <p className=" text-[32px] font-[400] font-[Bellefair] xl:text-[56px] ">{selectedTech.name}</p>
            <p className=" text-[#D0D6F9] text-center opacity-80 xl:text-left xl:text-[18px] ">{selectedTech.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
