import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex-1 mr-8 mb-8 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Academic Now</h2>
          <p className="text-[#fff] text-sm font-light leading-[26px]">
            The Academic Now Foundation is a consulting and training
            organization that supports public and private educational
            institutions, as well as people and groups in gaining access to
            intellectual, cultural, social, and moral education.
          </p>
          <div className="flex gap-6 mt-7">
            <FaFacebook style={{ color: "white", fontSize: "24px" }} />
            <FaInstagram style={{ color: "white", fontSize: "24px" }} />
            <FaYoutube style={{ color: "white", fontSize: "24px" }} />
            <FaTwitter style={{ color: "white", fontSize: "24px" }} />
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row justify-between">

        <div className="flex flex-col lg:mr-8 mb-8 md:mb-0">
          <h4 className="text-white text-[24px] font-bold">Company</h4>
          <ul className="">
            <li className="text-white text-[16px] font-normal leading-[40px]">
              <Link to="#">How we work</Link>
            </li>
            <li className="text-white text-[16px] font-normal leading-[40px]">
              <Link to="#">Terms of service</Link>
            </li>
            <li className="text-white text-[16px] font-normal leading-[40px]">
              <Link to="#">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:mr-8 mb-8 md:mb-0">
          <h4 className="text-white text-[24px] font-bold">Contact Us</h4>
          <ul className="">
            <li className="text-white text-[16px] font-normal leading-[40px]">
              <Link to="#">Block 7-8,Amani Street Kariakoo</Link>
            </li>
            <li className="text-white text-[16px] font-normal leading-[40px]">
              <Link to="#">Tel. (+1) 202-880-9696</Link>
            </li>
            <li className="text-white text-[16px] font-normal leading-[40px]">
              <Link to="#">Email: info@acaademicnow.org</Link>
            </li>
            <li className="text-white text-[16px] font-normal leading-[40px]">
              <Link to="#">P.O. Box 303, DarEs-Salaam Tanzania</Link>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
