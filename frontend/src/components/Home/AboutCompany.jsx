import { halfEclipse } from "../../assets";
import main from '../../assets/demo-videos.mp4';


const AboutCompany = () => {
  return (
    <div className="my-24 container mx-auto sm:px-16 px-6 relative">
      <div className="flex flex-col items-center">
        <h1 className="text-primaryBlue text-3xl md:text-4xl font-bold md:leading-[66px] mb-4">
          About
          <span className="text-[#1C1C1C] text-3xl md:text-4xl font-normal md:leading-[66px]">
            {" "}
            Company
          </span>
        </h1>
        <p className="text-[#333] text-base md:text-lg font-normal md:leading-[26px] text-center mb-6">
          The Academic Now Foundation is a consulting and training organization
          that supports public and private educational institutions, as well as
          people and groups in gaining access to intellectual, cultural, social,
          and moral education....
        </p>
      </div>


      <div>
        {/* <DemoVideo /> */}
        <video controls width="100%" height="auto" muted loop>
          <source src={main} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute left-0 top-[50%] -z-10">
        <img src={halfEclipse} alt="eclipse image" />
      </div>
    </div>
  );
};

export default AboutCompany;
