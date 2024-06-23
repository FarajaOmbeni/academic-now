import { mwanaisha } from "../../assets";

const Testimonials = () => {
  return (
    <div className="my-32">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-primaryBlue text-[52px] font-bold leading-[66px]">
          What
          <span className="text-[#1C1C1C] text-[52px] font-bold leading-[66px]">
            {" "}
            our students Say
          </span>
          <span className="text-[#1C1C1C] text-[28px] font-normal leading-[66px]">
            (Testimonials)
          </span>
        </h1>
        <p className="text-[#333] text-[18px] font-normal leading-[26px]">
          At Academic Now foundation, we believe in empowering students to
          pursue their academic dreams with confidence. Here are some of our
          services designed to streamline your journey to studying in the US.
        </p>
      </div>

      {/* testimonials box */}
      <div className="p-6 bg-[url('./assets/testimonialBg.png')] relative bg-cover rounded-[26px]">
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
      </div>
    </div>
  );
};

export default Testimonials;
