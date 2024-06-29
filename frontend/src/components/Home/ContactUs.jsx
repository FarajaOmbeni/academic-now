import { emailIcon, location, phoneCall } from "../../assets";

const ContactUs = () => {
  return (
    <div className="my-24 container mx-auto sm:px-16 px-6">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-[#2A3280] text-3xl mb-2 font-bold">Contact Us</h2>
        <p className="text-[#717171] text-[18px] font-normal">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* box */}
      <div className="flex justify-between">
        <div className="bg-[url('./assets/contactGradient.png')] bg-cover px-6 py-12">
          <div className="mb-8">
            <h4 className="text-white text-[28px] font-semibold">
              Contact Information
            </h4>
            <p className="text-[#C9C9C9] text-[18px] font-normal">
              Say something to start a live chat!
            </p>
          </div>
          <div className="flex items-center gap-4 mb-6 mt-32">
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
              <p className="mb-4 text-[#2E3899] text-[14px] font-semibold leading-[20px]">
                Select Subject
              </p>
              <div className="flex gap-4">
                <label>
                  <input type="radio" name="subject" value="General Enquiry" className="mr-2"/>
                  General Enquiry
                </label>
                <label>
                  <input type="radio" name="subject" value="Service Enquiry" className="mr-2" />
                  Service Enquiry
                </label>
                <label>
                  <input type="radio" name="subject" value="Office Enquiry"  className="mr-2"/>
                  Office Enquiry
                </label>
                <label>
                  <input type="radio" name="subject" value="School Enquiry" className="mr-2" />
                  School Enquiry
                </label>
              </div>

              <div className="flex flex-col my-4">
                <label htmlFor="" className="text-[#8D8D8D] text-[12px] font-normal leading-[20px] mb-2">Message</label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Write your message" className="p-4 border border-[#8D8D8D] rounded-[3px] outline-0"></textarea>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button className="text-[white] font-medium text-[16px] button-contact px-8 py-4">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
