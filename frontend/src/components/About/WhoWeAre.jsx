import { aboutCompany } from "../../assets";
import { partners, expertise } from "../../constants";

const WhoWeAre = () => {
  return (
    <div className="container mx-auto sm:px-16 px-6">
      <div className="">
        <h1 className="text-primaryBlue text-3xl md:text-4xl font-bold md:leading-[66px] mb-8 text-center">
          Who
          <span className="text-[#1C1C1C] text-3xl md:text-4xl font-normal md:leading-[66px]">
            {" "}
            We Are
          </span>
        </h1>

        <div className="">
          <img src={aboutCompany} alt="students in class" />
          {/* <img
            src={playIcon}
            className="absolute h-[116px] w-[116px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt="play icon"
          /> */}
        </div>

        <div className="flex flex-col items-center mt-24">
          <h1 className="text-primaryBlue text-3xl md:text-4xl font-bold mb-4 md:mb-0 md:leading-[66px]">
            Our
            <span className="text-[#1C1C1C] text-3xl md:text-4xl font-normal md:leading-[66px]">
              {" "}
              Expertise
            </span>
          </h1>
          <p className="text-[#333] text-center text-lg font-normal leading-[26px] mb-6">
            At Academic Now foundation, we believe in empowering students to
            pursue their academic dreams with confidence. Here are some of our
            staff in place to help streamline your journey to studying in the
            US.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-4">
          {expertise.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col items-center partners-shadow"
            >
              <img src={experience.img} alt="" />
              <div className="p-2">
                <h5 className="text-[#1C1C1C] text-xl font-semibold text-center mt-6 sm:mt-4 mb-4 sm:mb-0">
                  {experience.title}
                </h5>
                <p className="text-center text-[#4D4D4D] text-sm leading-[20px]">{experience.content}</p>
                <p className="text-center text-base font-bold leading-[26px] mt-2">{experience.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-24">
          <h1 className="text-primaryBlue text-4xl font-bold mb-4 md:mb-0 leading-[66px]">
            Our
            <span className="text-[#1C1C1C] text-4xl font-normal leading-[66px]">
              {" "}
              Partners
            </span>
          </h1>
          <p className="text-[#333] text-center text-[18px] font-normal leading-[26px] mb-6">
            We partner with reputable institutions and organizations in the US
            to provide students with access to a wide range of academic
            opportunities and resources.{" "}
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 md:gap-8 lg:gap-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center partners-shadow"
            >
              <img
                src={partner.img}
                alt=""
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h5 className="mt-4 text-[#4D4D4D] text-xl font-semibold text-center p-2">
                {partner.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
