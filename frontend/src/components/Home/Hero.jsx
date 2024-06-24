import { Student } from "../../assets";

const Hero = () => {
  return (
    <div className="flex justify-between items-center">
      {/* heading */}
      <div className="flex flex-col flex-1">
        <div className="">
          <h1 className="text-[78px] font-bold leading-[66px] text-primaryBlue">
            OPENING DOORS
            <p className="text-[78px] text-#1C1C1C font-normal leading-[66px]">
              FOR US STUDIES
            </p>
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-linkColor font-normal text-xl leading-[22px]">
            The Academic Now Foundation is a consulting and training{" "}
            organization that supports public.
          </p>
        </div>

        <div className="mt-8">
          <button className="bg-#FFCF59 px-4 py-2">REGISTER NOW</button>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={Student} alt="" />
      </div>
    </div>
  );
};

export default Hero;
