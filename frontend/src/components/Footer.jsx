import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="flex justify-between ">
        <div className="flex-1 mr-8">
          <h2 className="text-[50px] font-bold text-white">Academic Now</h2>
          <p className="text-[#fff] text-[14px] font-light leading-[26px]">
            The Academic Now Foundation is a consulting and training
            organization that supports public and private educational
            institutions, as well as people and groups in gaining access to
            intellectual, cultural, social, and moral education.
          </p>
          <div className="flex gap-6 mt-7">
            <FaFacebook style={{ color: 'white', fontSize: '24px'}}/>
            <FaInstagram style={{ color: 'white', fontSize: '24px'}}/>
            <FaYoutube style={{ color: 'white', fontSize: '24px'}}/>
            <FaTwitter style={{ color: 'white', fontSize: '24px'}}/>
          </div>
        </div>

        <div className="flex flex-col mr-8">
          <h4 className="text-white text-[24px] font-bold">About</h4>
          <ul className="">
            <li className="text-white text-[16px] font-normal leading-[40px]">
              Menu
            </li>
            <li className="text-white text-[16px] font-normal leading-[40px]">
              Features
            </li>
            <li className="text-white text-[16px] font-normal leading-[40px]">
              News & Blogs
            </li>
            <li className="text-white text-[16px] font-normal leading-[40px]">
              Help & Supports
            </li>
          </ul>
        </div>

        <div className="flex flex-col mr-8">
          <h4 className="text-white text-[24px] font-bold">Company</h4>
          <ul className="">
            <li className="text-white text-[16px] font-normal leading-[40px]">
              How we work
            </li>
            <li className="text-white text-[16px] font-normal leading-[40px]">
              Terms of service
            </li>
            <li className="text-white text-[16px] font-normal leading-[40px]">
              FAQ
            </li>
          </ul>
        </div>

        <div className="flex flex-col mr-8">
          <h4 className="text-white text-[24px] font-bold">Contact Us</h4>
          <ul className="">
            <li className="text-white text-[16px] font-normal leading-[40px]">
              Block 7-8,Amani Street Kariakoo
            </li>
            <li className="text-white text-[16px] font-normal leading-[40px]">
              Tel. (+1) 202-880-9696
            </li>
            <li className="text-white text-[16px] font-normal leading-[40px]">
              Email: info@acaademicnow.org
            </li>
            <li className="text-white text-[16px] font-normal leading-[40px]">
              P.O. Box 303, DarEs-Salaam Tanzania
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
