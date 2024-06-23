import { emailIcon, location, phoneCall } from "../../assets";

const ContactUs = () => {
  return (
    <div className="my-32">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-[#2A3280] text-[40px] font-bold">Contact Us</h2>
        <p className="#717171 text-[18px] font-medium">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* box */}
      <div className="flex justify-between">
        <div className="bg-[url('./assets/contactGradient.png')] px-6 py-12">
          <div className="mb-8">
            <h4 className="text-white text-[28px] font-semibold">
              Contact Information
            </h4>
            <p className="text-[#C9C9C9] text-[18px] font-normal">
              Say something to start a live chat!
            </p>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <img src={phoneCall} alt="" className="w-[24px] h-[24px]" />
            <p className="text-white text-[16px] font-normal">
              Tel. (+255) 7123-567-89
            </p>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <img src={emailIcon} alt="" className="w-[24px] h-[24px]" />
            <p className="text-white text-[16px] font-normal">
              info@acaademicnow.org
            </p>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <img src={location} alt="" className="w-[24px] h-[24px]" />
            <p className="text-white text-[16px] font-normal">
              Block 7-8 Amani Street, Kariakoo
            </p>
          </div>
        </div>

        <div className="">
          <form action="">
            <div className="flex gap-4 mb-8">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-4">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Arthur"
                  className="px-4 py-2 border border-linkColor rounded-[3px] outline-0"
                ></input>
              </div>

              <div className="flex flex-col">
                <label htmlFor="name" className="mb-4">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  className="px-4 py-2 border border-linkColor rounded-[3px] outline-0"
                  placeholder="Nyakundi"
                ></input>
              </div>
            </div>


            <div className="flex gap-4 mb-8">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-4">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="px-4 py-2 border border-linkColor rounded-[3px] outline-0"
                  placeholder="example@gmail.com"
                ></input>
              </div>

              <div className="flex flex-col">
                <label htmlFor="name" className="mb-4">
                  Phone Number
                </label>
                <input
                  type="phone"
                  id="name"
                  className="px-4 py-2 border border-linkColor rounded-[3px] outline-0"
                  placeholder="+254-702-567-012"
                ></input>
              </div>
            </div>

            {/* choose subject*/}
            <div>
                <p className="text-[#2E3899] text-[14px] font-semibold leading-[20px]">Select Subject</p>
                <select name="" id="">
                    <option value="">Select Subject</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Service Enquiry">Service Enquiry</option>
                    <option value="Office Enquiry">Office Enquiry</option>
                    <option value="School Enquiry">School Enquiry</option>
                </select>

                <div className="">
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

            </div>

            <div className="">
                <button className="button-contact px-8 py-4">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
