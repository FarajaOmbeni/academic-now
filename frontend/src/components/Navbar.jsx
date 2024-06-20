import { logo } from "../assets"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
        <div className="">
            <img src={logo} alt="" />
        </div>
        <ul className="flex items-center">
            <li className="">Home</li>
            <li className="">About Us</li>
            <li className="">Register Here</li>
            <li className="">Contact Us</li>
            <li className="">Why study in the US</li>
        </ul>
    </nav>
  )
}

export default Navbar