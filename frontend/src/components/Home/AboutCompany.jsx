import { aboutCompany, playIcon } from "../../assets";

const AboutCompany = () => {
  return (
    <div className="my-24">
      <div className="flex flex-col items-center">
        <h1 className="text-primaryBlue text-4xl font-bold leading-[66px] mb-4">
          About
          <span className="text-[#1C1C1C] text-4xl font-normal leading-[66px]">
            {" "}
            Company
          </span>
        </h1>
        <p className="text-[#333] text-[18px] font-normal leading-[26px] text-center mb-6">
          The Academic Now Foundation is a consulting and training organization
          that supports public and private educational institutions, as well as
          people and groups in gaining access to intellectual, cultural, social,
          and moral education....
        </p>
      </div>

      <div className="relative">
        <img src={aboutCompany} alt="students in class" />
        <img src={playIcon} className="absolute h-[116px] w-[116px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="play icon"/>
      </div>
    </div>
  );
};

export default AboutCompany;
