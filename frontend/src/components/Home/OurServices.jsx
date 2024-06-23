import { services } from "../../constants";

const OurServices = () => {
  return (
    <div className="my-32">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-primaryBlue text-[52px] font-bold leading-[66px]">
          Our
          <span className="text-[#1C1C1C] text-[52px] font-bold leading-[66px]">
            {" "}
            Services
          </span>
        </h1>
        <p className="text-[#333] text-[18px] font-normal leading-[26px]">
          At Academic Now foundation, we believe in empowering students to
          pursue their academic dreams with confidence. Here are some of our
          services designed to streamline your journey to studying in the US.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col items-center"
        >
          <img src={service.img} alt="" />
          <h5 className="text-[#1C1C1C] text-[22px] font-semibold text-center">
                {service.title}
              </h5>
              <p className="text-center">{service.content}</p>
          
        </div>
      ))}
      </div>
    </div>
  );
};

export default OurServices;
