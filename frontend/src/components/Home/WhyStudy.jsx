import { WhyStudySection } from "../../constants";

const WhyStudy = () => {
  return (
    <section className="my-24">
      <div className="">
        <h2 className="text-center text-primaryBlue mb-8 text-6xl font-semibold leading-[66px]">
          WHY STUDY{" "}
          <span className="text-[#1C1C1C] text-6xl font-normal leading-[66px]">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {WhyStudySection.map((section, index) => (
          <div className="whyus-card border bg-white rounded-2xl border-linkColor flex flex-col items-center justify-center p-2" key={index}>
            <img
              src={section.img}
              alt="section-img"
              className="whyStudy-img mb-4 mt-4"
              style={{ backgroundColor: section.color, width:'36px', height:'36px', padding:'4px', borderRadius: '9px' }}
            />
            <div className="">
              <h5 className="mb-2 text-[#1C1C1C] text-[22px] font-semibold text-center">
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
