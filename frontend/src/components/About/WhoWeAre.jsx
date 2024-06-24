import { aboutCompany, playIcon } from "../../assets";
import { partners, services } from "../../constants";

const WhoWeAre = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-primaryBlue text-[52px] font-bold leading-[66px] mb-8 text-center">
          Who
          <span className="text-[#1C1C1C] text-[52px] font-bold leading-[66px]">
            {" "}
            We Are
          </span>
        </h1>

        <div className="relative">
          <img src={aboutCompany} alt="students in class" />
          <img
            src={playIcon}
            className="absolute h-[116px] w-[116px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt="play icon"
          />
        </div>

        <div className="flex flex-col items-center mt-24">
          <h1 className="text-primaryBlue text-[52px] font-bold leading-[66px]">
            Our
            <span className="text-[#1C1C1C] text-[52px] font-bold leading-[66px]">
              {" "}
              Expertise
            </span>
          </h1>
          <p className="text-[#333] text-center text-[18px] font-normal leading-[26px] mb-4">
            At Academic Now foundation, we believe in empowering students to
            pursue their academic dreams with confidence. Here are some of our
            staff in place to help streamline your journey to studying in the
            US.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center">
              <img src={service.img} alt="" />
              <h5 className="text-[#1C1C1C] text-[22px] font-semibold text-center">
                {service.title}
              </h5>
              <p className="text-center">{service.content}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-24">
          <h1 className="text-primaryBlue text-[52px] font-bold leading-[66px]">
            Our
            <span className="text-[#1C1C1C] text-[52px] font-bold leading-[66px]">
              {" "}
              Partners
            </span>
          </h1>
          <p className="text-[#333] text-center text-[18px] font-normal leading-[26px] mb-4">
            We partner with reputable institutions and organizations in the US
            to provide students with access to a wide range of academic
            opportunities and resources.{" "}
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center partners-shadow">
              <img src={partner.img} alt="" />
              <h5 className="mt-4 text-[#1C1C1C] text-[22px] font-semibold text-center">
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
