import { emailIcon, location, phoneCall } from "../../assets";
import Divider from "../Divider";

import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from "react-spinners";
import { useState } from "react";

const ContactUs = ({ showHeading = true }) => {
  
  // const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          e.target.reset();
          setIsSubmitting(false);
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending email.");
          setIsSubmitting(false);
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="mt-24 pt-16 bg-[#F5F5F5]">
      <ToastContainer />
      <div className="container mx-auto sm:px-16 px-6">
        {showHeading && (
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-[#2A3280] text-2xl md:text-3xl mb-2 font-bold">
              Contact Us
            </h2>
            <p className="text-[#717171] text-base md:text-lg font-normal">
              Any question or remarks? Just write us a message!
            </p>
          </div>
        )}

        {/* box */}
        <div className="flex flex-col lg:flex-row gap-4 bg-white">
          <div className="footer-bg bg-cover px-6 py-12 w-full lg:w-[40%] md:text-center lg:text-start">
            <div className="mb-8">
              <h4 className="text-white text-2xl sm:text-3xl font-semibold">
                Contact Information
              </h4>
              <p className="text-[#C9C9C9] text-lg sm:text-xl font-normal">
                Say something to start a live chat!
              </p>
            </div>
            <div className="flex items-center md:justify-center lg:justify-start gap-4 mb-6 mt-20 lg:mt-32">
              <img
                src={phoneCall}
                alt="contact icon"
                className="w-[24px] h-[24px]"
              />
              <p className="text-white text-lg sm:text-xl font-normal">
                Tel. (+255) 7123-567-89
              </p>
            </div>
            <div className="flex items-center md:justify-center lg:justify-start gap-4 mb-6">
              <img
                src={emailIcon}
                alt="contact icon"
                className="w-[24px] h-[24px]"
              />
              <p className="text-white text-lg sm:text-xl font-normal">
                info@acaademicnow.org
              </p>
            </div>
            <div className="flex items-center md:justify-center lg:justify-start gap-4 mb-6">
              <img
                src={location}
                alt="contact icon"
                className="w-[24px] h-[24px]"
              />
              <p className="text-white text-lg sm:text-xl font-normal">
                Block 7-8 Amani Street, Kariakoo
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 w-full lg:w-[60%]">
            <form className="w-full" onSubmit={sendEmail}>
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex flex-col w-full">
                  <label htmlFor="name" className="mb-4">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Arthur"
                    className="w-full px-4 py-2 border border-linkColor rounded-[3px] outline-0"
                  ></input>
                </div>

                <div className="flex flex-col w-full">
                  <label htmlFor="name" className="mb-4">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    className="w-full px-4 py-2 border border-linkColor rounded-[3px] outline-0"
                    placeholder="Nyakundi"
                  ></input>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4  mb-8">
                <div className="flex flex-col w-full">
                  <label htmlFor="name" className="mb-4">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-linkColor rounded-[3px] outline-0"
                    placeholder="example@gmail.com"
                  ></input>
                </div>

                <div className="flex flex-col w-full">
                  <label htmlFor="name" className="mb-4">
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-linkColor rounded-[3px] outline-0"
                    placeholder="+254-702-567-012"
                  ></input>
                </div>
              </div>

              {/* choose subject*/}
              <div className="">
                <p className="mb-4 text-[#2E3899] text-[14px] font-semibold leading-[20px]">
                  Select Subject
                </p>
                <div className="flex flex-col md:flex-row justify-between">
                  <label>
                    <input
                      type="radio"
                      name="subject"
                      // value="General Enquiry"
                      className="mr-2"
                    />
                    General Enquiry
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="subject"
                      // value="Service Enquiry"
                      className="mr-2"
                    />
                    Service Enquiry
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="subject"
                      // value="Office Enquiry"
                      className="mr-2"
                    />
                    Office Enquiry
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="subject"
                      // value="School Enquiry"
                      className="mr-2"
                    />
                    School Enquiry
                  </label>
                </div>

                <div className="flex flex-col my-4 w-full">
                  <label
                    htmlFor=""
                    className="text-[#8D8D8D] text-[12px] font-normal leading-[20px] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    cols="10"
                    rows="5"
                    id="message"
                    name="message"
                    placeholder="Write your message"
                    className="p-4 border-b border-[#8D8D8D] rounded-[3px] outline-0"
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-end mt-6">
                <button
                  disabled={isSubmitting || isLoading}
                  className={`text-[white] font-medium text-lg md:text-xl button-contact newGradient px-4 p-2 md:px-8 md:py-4 mb-6 transform transition-all duration-200 cursor-pointer ${
                    isSubmitting
                      ? "opacity-50"
                      : "hover:bg-lightBlue hover:scale-110"
                  }`}
                >
                  {isLoading ? <BeatLoader color="#ffffff" /> : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default ContactUs;
