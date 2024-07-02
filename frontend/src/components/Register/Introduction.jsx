const Introduction = () => {
  return (
    <div className="container mx-auto sm:px-16 px-6">
      <div className="mb-12 flex items-center justify-center flex-col">
        <h1 className="text-center mb-6 text-primaryBlue text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold lg:leading-[37px]">
          At Academic Now
        </h1>
        <div className="flex items-center justify-center">
          <p className="w-[70%] text-center text-[#292828] montserrat text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal lg:leading-[37px]">
            We provide comprehensive support for students, including application
            assistance, scholarship search, essay guidance, interview
            preparation, visa support and pre-departure orientation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
