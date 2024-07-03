import { enrollmentImage } from "../../assets";
import { enrollment } from "../../constants";

const EffortlessEnrollment = () => {
  return (
    <section className="">
      <div className="bg-[#FFCF59] mb-24">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-8 lg:mb-0 flex justify-center items-center pt-6 bg-[url('./assets/halfEclipse.png')] bg-no-repeat bg-cover bg-left-top">
            <img src={enrollmentImage} alt="enrollment image" className="w-[60%] lg:w-full"/>
          </div>
          <div className="px-6">
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-[66px] text-[#1C1C1C] mb-12 mt-6">
              Effortless Enrollment
            </h4>
            <div className="flex flex-col items-center">
              {enrollment.map((enroll) => (
                <div
                  className="flex gap-2 bg-white rounded-[20px] p-4 mb-8 w-full items-center"
                  key={enroll.id}
                >
                  <p className="text-[#1C1C1C] text-2xl md:text-3xl font-bold">
                    {enroll.number}
                  </p>
                  <div className="line"></div>
                  <p className="text-[#1C1C1C] text-xl md:text-2xl font-bold">
                    {enroll.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EffortlessEnrollment;
