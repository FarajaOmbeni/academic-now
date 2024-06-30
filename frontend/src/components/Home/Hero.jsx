import { Student } from "../../assets";

const Hero = () => {
  return (
    <div className="container mx-auto sm:px-16 px-6">
      <div className="flex flex-col md:flex-row justify-between">
        {/* heading */}
        <div className="flex flex-col md:flex-1 mt-14 mb-12 md:mb-0">
          <div className="">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold lg:leading-[66px] text-primaryBlue">
              OPENING DOORS
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1C1C1C] font-normal lg:leading-[66px]">
                FOR US STUDIES
              </p>
            </h1>
          </div>
          <div className="mt-4">
            <p className="text-linkColor font-normal text-lg md:text-xl md:leading-[22px]">
              The Academic Now Foundation is a consulting <br /> and training{" "}
              organization that supports public.
            </p>
          </div>

          <div className="mt-8">
            <button className="bg-[#FFCF59] px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 py-2 sm:py-2 md:py-3 lg:py-3 xl:py-3 rounded-2xl text-[#1C1C1C] text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-semibold border-none outline-none">
              REGISTER NOW
            </button>
          </div>
        </div>

        <div className="flex-1">
          <img src={Student} alt="" className="hero-bg w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
