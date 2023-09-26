import { Link, useLocation, useParams } from "react-router-dom";
import { CrewMember } from "../../types/crews.d";

const CrewMembers: React.FC<{ members: CrewMember[] }> = ({ members }) => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const selectedMember = members.find((member) => member.id === id);

  if (!selectedMember) {
    return <p className=" text-white">Crew member not found</p>;
  }

  return (
    <div>
      <div className="grid  md:h-[67vh] md:-mt-[125px] xl:flex xl:w-[100%]  xl:m-auto xl:h-auto ">
        <div className=" w-[327px] h-[223px] m-auto border-b border-white border-opacity-30 md:order-2 md:relative md:bottom-0 md:left-0 md:right-0 md:m-auto md:border-none xl:h-auto xl:w-auto">
          <img
            className=" w-[240px] h-[220px] md:w-[400px] md:h-[400px] m-auto xl:h-[645px] xl:w-[450px]"
            src={`https://apiforplanets-production.up.railway.app/${selectedMember.images.png}`}
            alt=""
          />
        </div>
        <div className=" text-center w-[83%] m-auto md:order-1 md:w-[50%] xl:text-left xl:grid xl:relative xl:-top-24">
          <div className=" flex w-[88px] justify-between m-auto mt-12  xl:order-4 xl:m-0 xl:mt-10">
            {members.map((circle) => (
              <Link
                className={` w-3 h-3 xl:w-[15px] xl:h-[15px]  rounded-full block ${
                  location.pathname === `/crew/${circle.id}`
                    ? "bg-white"
                    : "bg-white opacity-40"
                }`}
                key={circle.id}
                to={`/crew/` + circle.id}
              ></Link>
            ))}
          </div>

          <p className=" uppercase font-[Bellefair] font-[400] text-[16px] text-white opacity-40 mt-5 xl:text-[32px] ">
            {selectedMember.role}
          </p>
          <p className=" uppercase font-[Bellefair] font-[400] text-[24px] text-white xl:text-[56px] ">
            {selectedMember.name}
          </p>
          <p className=" font-[Barlow] font-[400] text-[15px] text-[#D0D6F9] mt-5 opacity-70 xl:text-[18px] ">
            {selectedMember.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrewMembers;
