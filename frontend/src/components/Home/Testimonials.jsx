import { mwanaisha, quoteIcon } from "../../assets";
import YellowCircle from "../SvgComponents/YellowCircle";

const Testimonials = () => {
  return (
    <div className="mt-24 mb-40 container mx-auto sm:px-16 px-6">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-primaryBlue text-3xl md:text-4xl font-bold md:leading-[66px] mb-6 md:mb-0 text-center">
          What
          <span className="text-[#1C1C1C] text-3xl md:text-4xl font-normal md:leading-[66px]">
            {" "}
            our students Say
          </span>
        </h1>
        <p className="text-[#333] text-lg font-normal leading-[26px] text-center">
          At Academic Now foundation, we believe in empowering students to
          pursue their academic dreams with confidence. Here are some of our
          services designed to streamline your journey to studying in the US.
        </p>
      </div>

      {/* testimonials box */}
      <div className="p-6 bg-[url('./assets/testimonialBg.png')] relative bg-cover rounded-[26px] mt-14">
        <p className="text-white text-center text-[18px] font-normal leading-[28px]">
          Studying in the United States through Academic Now was transformative,
          thanks to its support and guidance. The US education systems focus on
          practical learning and critical thinking broadened my academic
          horizons and equipped me with valuable skills. The flexibility of the
          US education system allowed me to explore various subjects before
          deciding on my major, and the availability of resources ensured I had
          the guidance I needed. Overall, I am grateful for the opportunity and
          would highly recommend Academic Now to any Tanzanian student seeking
          to broaden their horizons and pursue their academic goals.
        </p>
        <img src={mwanaisha} alt="testimonial-image" className="absolute w-[108px] h-[108px] transform -translate-x-1/2 left-1/2" />
        <img src={quoteIcon} alt="quote icon" className="absolute top-[-5%] md:top-[-15%] left-[3%] w-[54px] h-[54px]" />

        <div className="absolute right-[5%] top-[-20%] -z-10">
        <YellowCircle width={80} height={80}/>
        </div>
        <div className="absolute left-[5%] -z-10">
        <YellowCircle width={80} height={80}/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
