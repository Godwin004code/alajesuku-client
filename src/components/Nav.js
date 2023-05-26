
import Logo from "../Assets/nav link.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = () => {
    return (
        <header className="bg-[#06345C] w-[100%] py-3 pt-5 md:pt-8 flex justify-between">
            <div className="ml-[5%]">
                <img src={Logo} alt="Logo" />
            </div>
            <nav className="mr-[5%] w-[40%] sm:hidden">
                <ul className="flex justify-between items-center">
                    <li>
                        <Link className={window.location.pathname === "/" ? "text-[#66D2FF] font-normal text-base" : "text-white font-normal text-base"} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="text-white font-normal text-base" to="/">About us</Link>
                    </li>
                    <li>
                        <Link className="text-white font-normal text-base" to="/">Services</Link>
                    </li>
                    <li>
                        <Link className={window.location.pathname === "/contact-us" ? "text-[#66D2FF] font-normal text-base" : "text-white font-normal text-base"} to="/contact-us">Contact us</Link>
                    </li>
                    <li className="ml-7">
                        <Link className="text-white font-normal text-base" to="/">Sign in</Link>
                    </li>
                    <Link to="/contact-us">
                    <button className="text-white font-medium text-base bg-[#42B8E9] px-5 py-3 rounded-lg">Contact Us</button>
                    </Link>
                </ul>
            </nav>
            <div className="hidden md:block text-white md:mr-[5%] text-2xl">
                <FaBars />
            </div>
        </header>
    )
}

export default Nav