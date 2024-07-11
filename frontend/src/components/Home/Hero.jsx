import { HashLink as Link } from "react-router-hash-link";
import { blob, Student } from "../../assets";
import Flower from "../SvgComponents/Flower";
import YellowCircle from "../SvgComponents/YellowCircle";

const Hero = () => {
  return (
    <div className="relative">
      <div className="container mx-auto sm:px-16 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-0 relative">
          
          {/* heading */}
          <div className="fw-full md:w-1/2 mt-8 md:mt-0 md:ml-8 space-y-9 text-center lg:text-start">
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
                The Academic Now Foundation is a consulting and training{" "}
                organization that supports public.
              </p>
            </div>

            <div className="mt-8">
              <Link to="/register#registration">
                <button className="bg-orangeColor px-4 sm:px-5 md:px-6 lg:px-6 xl:px-6 py-2 sm:py-2 md:py-3 lg:py-3 xl:py-3 rounded-2xl text-[#1C1C1C] text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-semibold border-none outline-none transform hover:scale-110 transition-all duration-200">
                  REGISTER NOW
                </button>
              </Link>
            </div>
          </div>

          {/* <div className="flex-1 hidden lg:block hero-bg">
            <img src={Student} alt="" className="w-full h-auto" />
          </div> */}

          <div className="relative w-full md:w-1/2">
            <img src={blob} alt="blob" className="w-full h-full object-cover" />
            <img
              src={Student}
              alt="profile"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full rounded-full"
            />
          </div>

          <div className="absolute bottom-[-80px] md:bottom-[-80px] lg:bottom-[5%] left-[40%]">
            <Flower width={70} height={70} fillColor="#650155" />
          </div>
          <div className="absolute left-[20%] md:bottom-[-70px] 2xl:bottom-[15%] hidden md:block">
            <Flower width={50} height={50} fillColor="#f66742" />
          </div>
        </div>
      </div>

      <div className="absolute left-[-50px] bottom-0">
        <YellowCircle width={80} height={80} />
      </div>

      <div className="absolute right-[-40px] bottom-0">
        <YellowCircle width={80} height={80} />
      </div>
    </div>
  );
};

export default Hero;
