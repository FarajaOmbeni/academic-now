import { Student } from "../../assets";

const Hero = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        {/* heading */}
        <div className="flex flex-col flex-1 mt-14">
          <div className="">
            <h1 className="text-7xl font-bold leading-[66px] text-primaryBlue">
              OPENING DOORS
              <p className="text-7xl text-[#1C1C1C] font-normal leading-[66px]">
                FOR US STUDIES
              </p>
            </h1>
          </div>
          <div className="mt-4">
            <p className="text-linkColor font-normal text-xl leading-[22px]">
              The Academic Now Foundation is a consulting <br /> and training{" "}
              organization that supports public.
            </p>
          </div>

          <div className="mt-8">
            <button className="bg-[#FFCF59] px-12 py-3 rounded-2xl text-[#1C1C1C] text-[20px] font-semibold">
              REGISTER NOW
            </button>
          </div>
        </div>

        <div className="flex-1">
          <img src={Student} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
