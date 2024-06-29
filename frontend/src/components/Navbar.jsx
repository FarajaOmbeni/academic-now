import { useState } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  return (
    <section className="container mx-auto sm:px-16 px-6">
    <nav className="w-full py-4 flex items-center justify-between">
      <div className="">
        <img src={logo} alt="" className="w-[100px]" />
      </div>
      <ul className="flex items-center">
        <li
          className={`font-semibold text-[20px] ${
            active === "Home" ? "text-black" : "text-linkColor"
          } mr-10`}
          onClick={() => setActive("Home")}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`font-semibold text-[20px] ${
            active === "About" ? "text-black" : "text-linkColor"
          } mr-10`}
          onClick={() => setActive("About")}
        >
          <Link to="/about">About Us</Link>
        </li>
        <li
          className={`font-semibold text-[20px] ${
            active === "Register" ? "text-black" : "text-linkColor"
          } mr-10`}
          onClick={() => setActive("Register")}
        >
          <Link to="/register">Register Here</Link>
        </li>
        <li
          className={`font-semibold text-[20px] ${
            active === "Contact" ? "text-black" : "text-linkColor"
          } mr-10`}
          onClick={() => setActive("Contact")}
        >
          <Link to="/contact">Contact Us</Link>
        </li>
        <li
          className={`font-semibold text-[20px] ${
            active === "Whyus" ? "text-black" : "text-linkColor"
          } mr-10`}
          onClick={() => setActive("Whyus")}
        >
          <Link to="/whystudy">Why study in the US</Link>
        </li>
      </ul>
    </nav>
    </section>
  );
};

export default Navbar;
