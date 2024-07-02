const RegistrationForm = () => {
  return (
    <div className="container mx-auto sm:px-16 px-6">
      <div>
        <h3 className="text-[#FF7162] montserrat text-2xl md:text-3xl font-extrabold leading-[54px] mt-4">
          Registration Form - Personal Info
        </h3>
        <p className="text-[18px] leading-[32px] text-[#767676] font-normal mb-6 rounded-mplus">
          Begin Your Journey with Us! Complete the Registration Form - to Get
          Started.
        </p>
      </div>

      {/* Actual form starts here */}
      <div className="">
        <form action="" className="w-full">
          <div className="mb-8 rounded-[30px] bg-customBlue p-6">
            <div className="flex flex-col md:flex-row mb-12 gap-6">
              <div className="flex flex-col w-full">
                <label className="text-[16px] leading-[22px] font-extrabold text-[#767676] mb-4 rounded-mplus">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Mwanaisha"
                  className="bg-white w-full px-3 py-4 rounded-3xl firstInput"
                ></input>
              </div>

              <div className="flex flex-col w-full">
                <label className="text-[16px] leading-[22px] font-extrabold text-[#767676] mb-4 rounded-mplus">
                  Middle Name
                </label>
                <input
                  type="text"
                  placeholder="Babu"
                  className="bg-white w-full px-3 py-4 rounded-3xl firstInput"
                ></input>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[16px] leading-[22px] font-extrabold text-[#767676] mb-4 rounded-mplus">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Chidzuga"
                  className="bg-white w-full px-3 py-4 rounded-3xl firstInput"
                ></input>
              </div>
            </div>

            <div className="flex flex-col md:flex-row mb-12 gap-6">
              <div className="flex flex-col w-full">
                <label className="text-[16px] leading-[22px] font-extrabold text-[#767676] mb-4 rounded-mplus">
                  Gender
                </label>
                <select className="bg-white w-full px-3 py-4 rounded-3xl firstInput">
                  <option value="">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[16px] leading-[22px] font-extrabold text-[#767676] mb-4 rounded-mplus">
                  Date of Birth
                </label>
                <input
                  type="date"
                  placeholder="First Name"
                  className="bg-white px-3 py-4 rounded-3xl firstInput"
                ></input>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[16px] leading-[22px] font-extrabold text-[#767676] mb-4 rounded-mplus">
                  Year of Study
                </label>
                <select className="bg-white px-3 py-4 rounded-3xl firstInput">
                  <option value="">First Year</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-6 rounded-[30px] bg-customBlue p-6">
            <h5 className="mb-6 text-black text-[18px] font-extrabold leading-[24px] montserrat">
              Contact Information
            </h5>
            <div className="flex flex-col md:flex-row mb-12 gap-6">
              <div className="flex flex-col w-full">
                <label className="text-[16px] leading-[22px] font-extrabold text-[#767676] mb-4 rounded-mplus">
                  Choose Country
                </label>
                <select className="bg-white px-3 py-4 rounded-3xl firstInput">
                  <option value="">Kenya</option>
                  <option value="1st">Uganda</option>
                  <option value="2nd">Ethiopia</option>
                  <option value="3rd">Tanzania</option>
                  <option value="4th">Rwanda</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[16px] leading-[22px] font-extrabold text-[#767676] mb-4 rounded-mplus">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Nairobi"
                  className="bg-white px-3 py-4 rounded-3xl firstInput"
                ></input>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[16px] leading-[22px] font-extrabold text-[#767676] mb-4 rounded-mplus">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="00100 Nairobi"
                  className="bg-white px-3 py-4 rounded-3xl firstInput"
                ></input>
              </div>
            </div>

            <div className="flex flex-col md:flex-row mb-12 gap-6">
              <div className="flex flex-col w-full">
                <label className="text-[16px] leading-[22px] font-extrabold text-[#767676] mb-4 rounded-mplus">
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="academicnow@gmail.com"
                  className="bg-white px-3 py-4 rounded-3xl firstInput"
                ></input>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[16px] leading-[22px] font-extrabold text-[#767676] mb-4 rounded-mplus">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+254702567012"
                  className="bg-white px-3 py-4 rounded-3xl firstInput"
                ></input>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[16px] leading-[22px] font-extrabold text-[#767676] mb-4 rounded-mplus">
                  Education Qualification
                </label>
                <select className="bg-white px-3 py-4 rounded-3xl firstInput">
                  <option value="">B.Tech</option>
                  <option value="1st">B.comm</option>
                  <option value="2nd">IT</option>
                  <option value="3rd">Agriculture</option>
                  <option value="4th">Maths</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-[16px] leading-[22px] font-extrabold text-[#767676] mb-4 rounded-mplus">
                Additional Academic Qualification
              </label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Please type your Field of Study/ Major
GPA or Equivalent (Optional)" className="p-4 rounded-[20px] firstInput"></textarea>
            </div>

            {/* line */}
            <div className="mt-12 mb-6 w-full bg-[#767676] h-[1px]"></div>
          </div>

          <div className="mb-8 flex justify-center items-center md:justify-start">
            <button className="bg-[#2E3899] text-base sm:text-lg md:text-xl lg:text-2xl lg:leading-[24px] font-extrabold rounded-mplus rounded-[40px] px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 text-white">Register Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
