import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ page, setPage }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ulRef = useRef<HTMLUListElement | null>(null);

  const handleClickOutside = (event: any) => {
    if (ulRef.current && !ulRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <div className="w-11/12 flex justify-between items-center m-auto pt-6 relative xl:mt-5">
        <img className="w-10 h-10" src="/assets/logo.svg" alt="" />

        <img
          className="w-6 h-[21px] md:hidden"
          src="/assets/icon-hamburger.svg"
          alt=""
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
      <div
        className={` backdrop-blur-2xl w-[254px] h-screen absolute top-0 transition-all duration-500  ${
          !isOpen ? "-right-[320px]" : " right-[0]"
        } pt-20 pl-6 z-10  md:h-auto md:w-[450px] md:p-0 md:pt-7 md:backdrop-blur-0  md:flex md:justify-center md:items-center md:right-0 md:bg-gradientColor xl:backdrop-blur-3xl xl:bg-none xl:w-[830px] xl:mt-5`}
      >
        <div className="hidden xl:block absolute w-[50%] h-[1px] bg-white -left-[310px] top-3 bottom-0 m-auto opacity-50 z-10"></div>
        <ul
          ref={ulRef}
          className={`text-white md:flex md:w-[356px] md:justify-between xl:w-[542px]`}
        >
          <img
            className="absolute right-7 top-7 md:hidden"
            src="/assets/icon-close.svg"
            alt=""
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <Link
            to="/"
            onClick={() => {
              setPage("home");
              setIsOpen(false)
            }}
            className={`flex mt-5 md:m-0   md:pb-7 ${
              page === "home" ? "md:border-b-[3px] border-[#FFFFFF]" : null
            } xl:hover:border-b-[3px] border-white transition-all duration-150`}
          >
            <p className="font-[700] text-[16px] font-[Barlow-Condensed] md:hidden">
              00
            </p>
            <p className="font-[100] tracking-[2px] ml-3 md:text-[14px] md:ml-0">
              HOME
            </p>
          </Link>
          <Link
            to="/destination"
            onClick={() => {
              setPage("destination");
              setIsOpen(false)
            }}
            className={`flex mt-5 md:m-0   md:pb-7 ${
              page === "destination"
                ? "md:border-b-[3px] border-[#FFFFFF]"
                : null
            } xl:hover:border-b-[3px] border-white transition-all duration-150`}
          >
            <p className="font-[700] text-[16px] font-[Barlow-Condensed] md:hidden">
              01
            </p>
            <p className="font-[100] tracking-[2px] ml-3 md:text-[14px] md:ml-0">
              DESTINATION
            </p>
          </Link>
          <Link
            to="/crew"
            onClick={() => {
              setPage("crew");
              setIsOpen(false)
            }}
            className={`flex mt-5 md:m-0   md:pb-7 ${
              page === "crew" ? "md:border-b-[3px] border-[#FFFFFF]" : null
            } xl:hover:border-b-[3px] border-white transition-all duration-150`}
          >
            <p className="font-[700] text-[16px] font-[Barlow-Condensed] md:hidden">
              02
            </p>
            <p className="font-[100] tracking-[2px] ml-3 md:text-[14px] md:ml-0">
              CREW
            </p>
          </Link>
          <Link
            to="/technology"
            onClick={() => {
              setPage("technology");
              setIsOpen(false)
            }}
            className={`flex mt-5 md:m-0   md:pb-7 ${
              page === "technology"
                ? "md:border-b-[3px] border-[#FFFFFF]"
                : null
            } xl:hover:border-b-[3px] border-white transition-all duration-150`}
          >
            <p className="font-[700] text-[16px] font-[Barlow-Condensed] md:hidden">
              03
            </p>
            <p className="font-[100] tracking-[2px] ml-3 md:text-[14px] md:ml-0">
              TECHNOLOGY
            </p>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
