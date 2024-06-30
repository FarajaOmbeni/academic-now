import { services } from "../../constants";

const OurServices = () => {
  return (
    <div className="my-24 bg-[#F5F5F5] py-16">
      <div className="container mx-auto sm:px-16 px-6">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-primaryBlue text-3xl md:text-4xl font-bold md:leading-[66px]">
            Our
            <span className="text-[#1C1C1C] text-3xl md:text-4xl font-normal md:leading-[66px]">
              {" "}
              Services
            </span>
          </h1>
          <p className="text-center mb-6 text-[#333]text-base md:text-lg font-normal md:leading-[26px]">
            At Academic Now foundation, we believe in empowering students to
            pursue their academic dreams with confidence. Here are some of our
            services designed to streamline your journey to studying in the US.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="whyus-card relative flex flex-col items-center bg-white"
            >
              <img src={service.img} alt="" />
              <div className="p-2">
                <h5 className="text-[#1C1C1C] text-xl md:text-2xl font-semibold text-center">
                  {service.title}
                </h5>
                <p className="text-center mb-12 text-[#4D4D4D] text-sm leading-[20px]">{service.content}</p>
              </div>
              <button className="text-[#1C1C1C] text-[14px] font-semibold bg-[#FFCF59] rounded-[13px] px-6 py-3 absolute transform -translate-x-1/2 left-1/2 bottom-[-5%]">
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
