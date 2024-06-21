import { WhyStudySection } from "../../constants";

const WhyStudy = () => {
  return (
    <section className="my-32">
      <div className="">
        <h2 className="mb-8 text-[#1C1C1C] text-[64px] font-normal leading-[66px]">
          WHY STUDY{" "}
          <span className="text-primaryBlue text-[64px] font-normal leading-[66px]">
            IN THE US ?
          </span>
        </h2>
        <p className="mb-4 text-center text-[#333] text-[18px] font-normal leading-[26px]">
          Studying in the US provides access to world-class education and
          diverse cultural experiences, setting the stage for personal and
          professional growth..
        </p>
      </div>

      {/* cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {WhyStudySection.map((section, index) => (
          <div className="border rounded-2xl border-linkColor flex flex-col items-center justify-center p-4" key={index}>
            <img
              src={section.img}
              alt=""
              style={{ backgroundColor: section.color, width:'36px', height:'36px', padding:'4px', borderRadius: '9px' }}
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
    </section>
  );
};

export default WhyStudy;
