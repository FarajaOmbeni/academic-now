import { enrollmentImage } from "../../assets";
import { enrollment } from "../../constants";

const EffortlessEnrollment = () => {
  return (
    <div className="bg-[#FFCF59] mb-24">
      <div className="flex">
        <div className="">
          <img src={enrollmentImage} alt="enrollment image" />
        </div>
        <div className="">
          <h4 className="text-5xl font-bold leading-[66px] text-[#1C1C1C] mb-12 mt-6">
            Effortless Enrollment
          </h4>
          <div className="flex flex-col items-center">
            {enrollment.map((enroll) => (
              <div
                className="flex gap-2 bg-white rounded-[20px] p-4 mb-8 w-full items-center"
                key={enroll.id}
              >
                <p className="text-[#1C1C1C] text-[30px] font-bold">
                  {enroll.number}
                </p>
                <div className="line"></div>
                <p className="text-[#1C1C1C] text-[22px] font-bold">
                  {enroll.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffortlessEnrollment;
