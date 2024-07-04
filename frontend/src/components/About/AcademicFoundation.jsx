const AcademicFoundation = () => {
  return (
    <div className="relative">
      <div className="bg-opacity-60 absolute inset-0 bg-black"></div>
      <div className="flex flex-col items-center justify-center p-20 bg-[url('./assets/academic-foundation-img.jpg')] bg-cover bg-center">
        <div className="z-10 text-center">
          <h3 className="text-white text-[25px] font-bold inter">
            Join Academic Now Foundation Today!
          </h3>
          <p className="text-white inter text-[18px] font-medium">
            Start Your US Study Journey Today: Apply Now!
          </p>

          <div className="">
            <button className="inter text-[18px] font-medium px-12 mt-8 text-white py-3 bg-[#51AB3B] rounded-[5px] transform hover:scale-110 transition-all duration-200">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicFoundation;
