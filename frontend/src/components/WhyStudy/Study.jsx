import { videoDiscussion } from "../../assets";
import { WhyStudySection } from "../../constants";

const Study = () => {
  return (
    <div className="container mx-auto sm:px-16 px-6"> 
      <div className="flex flex-col items-center mt-4 mb-8">
        <h1 className="text-primaryBlue text-[52px] font-bold leading-[66px]">
          Why Study in
          <span className="text-[#1C1C1C] text-[52px] font-bold leading-[66px]">
            {" "}
            US
          </span>
        </h1>
      </div>

      {/* cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {WhyStudySection.slice(0, 3).map((section, index) => (
          <div
            className="border rounded-2xl border-linkColor flex flex-col items-center justify-center p-4"
            key={index}
          >
            <img
              src={section.img}
              alt=""
              style={{
                backgroundColor: section.color,
                width: "36px",
                height: "36px",
                padding: "4px",
                borderRadius: "9px",
              }}
            />
            <div className="">
              <h5 className="text-[#1C1C1C] text-[22px] font-semibold text-center">
                {section.title}
              </h5>
              <p className="text-center">{section.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center items-center w-[900px] mx-auto mb-20">
        <h4 className="text-[#333] text-center text-[32px] font-normal leading-[26px]">
          Access world-class education and diverse cultural experiences, setting
          the stage for personal and professional growth
        </h4>
      </div>

      <div className="flex justify-center items-center w-[900px] mx-auto">
        <img src={videoDiscussion} alt="discussion" />
      </div>
    </div>
  );
};

export default Study;
