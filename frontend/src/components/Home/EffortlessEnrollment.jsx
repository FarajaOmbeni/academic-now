import { enrollmentImage } from "../../assets";
import { enrollment } from "../../constants";

const EffortlessEnrollment = () => {
  return (
    <div className="bg-[#FFCF59]">
      <div className="flex">
        <div className="">
          <img src={enrollmentImage} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          {enrollment.map((enroll) => (
            <div
              className="flex gap-4 bg-white rounded-[20px] p-4 mb-8"
              key={enroll.id}
            >
              <p className="text-[#1C1C1C] text-[30px] font-bold">{enroll.number}</p>
              <p className="text-[#1C1C1C] text-[22px] font-bold">{enroll.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EffortlessEnrollment;
