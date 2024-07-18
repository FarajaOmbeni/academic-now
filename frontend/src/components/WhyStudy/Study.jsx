import { WhyStudySection } from "../../constants";
import main from '../../assets/demo-videos.mp4';


const Study = () => {
  return (
    <div className="container mx-auto sm:px-16 px-6">
      <div className="flex flex-col items-center mt-4 mb-8">
        <h1 className="text-primaryBlue text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-[66px]">
          Why Study in
          <span className="text-[#1C1C1C] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-[66px]">
            {" "}
            US
          </span>
        </h1>
      </div>

      {/* cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8 lg:gap-4">
        {WhyStudySection.slice(0, 3).map((section, index) => (
          <div
            className=" whyus-card border rounded-2xl border-linkColor flex flex-col items-center justify-center p-4 bg-white partners-shadow"
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

      <div className="mt-12 flex justify-center items-center mb-20">
        <h4 className="text-[#333] text-center text-xl sm:text-2xl md:text-3xl font-normal leading-[26px]">
          Access world-class education and diverse cultural experiences, setting
          the stage for personal and professional growth
        </h4>
      </div>

      {/* <div className="flex justify-center items-center mb-14">
        <img src={videoDiscussion} alt="discussion" />
      </div> */}

      <div className="mb-16">
        {/* <DemoVideo /> */}
        <video controls width="100%" height="auto" muted loop>
          <source src={main} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Study;
