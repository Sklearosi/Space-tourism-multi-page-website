const Home = () => {
  return (
    <div>
      <div className=" w-[85%] m-auto mt-14 md:mt-[150px] md:w-[60%] xl:flex xl:w-[80%] xl:justify-between xl:items-center xl:mt-[200px] 2xl:w-[65%]">
        <div className=" xl:w-[400px] ">
          <p className=" font-[400] text-[#D0D6F9] text-[16px] text-center font-[Barlow-Condensed] md:text-[20px] xl:text-[28px] xl:text-left">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className=" font-[Bellefair] font-[400] text-[80px] text-center text-white mt-1 md:text-[150px]">
            SPACE
          </h1>
          <p className=" font-[400] text-[15px] font-[Barlow] text-[#D0D6F9] text-center md:text-[18px] xl:text-left">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="relative xl:w-[450px] xl:h-[450px] group">
          <div
            className="hidden xl:block xl:absolute top-0 right-0 bottom-0 left-0 m-auto bg-white opacity-10
            w-0 h-0 rounded-full group-hover:w-[450px] group-hover:h-[450px] transition-all duration-500"
          ></div>
          <button className="w-[150px] h-[150px] bg-white text-center font-[400] text-[20px] font-[Bellefair] block m-auto rounded-full text-[#0B0D17] mt-16 md:w-[242px] md:h-[242px] md:text-[32px] md:font-[400] z-10 xl:absolute xl:top-0 xl:right-0 xl:bottom-0 xl:left-0 xl:m-auto">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
