import { contactImg } from "../../assets";

const ContactIntro = () => {
  return (
    <div>
      <div className="flex">
        <div className="">
          <h1 className="text-[#2A3280] text-7xl mb-8 font-bold">Contact Us</h1>
          <p className="text-[#717171] text-2xl font-medium">
            Have any questions or remarks? <br /> We are here to help! <br />Just write us a
            message with your concerns. <br /> Our team will get back to you promptly.
          </p>
        </div>

        <div className="">
            <img src={contactImg} alt="contact-img" />
        </div>
      </div>
    </div>
  );
};

export default ContactIntro;
