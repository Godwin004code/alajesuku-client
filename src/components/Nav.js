
import Logo from "../Assets/nav link.png";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import "./Hover.css"

const Nav = () => {
    const handleGotoContact = () => {
        window.location.pathname = "/contact-us"
    }
    const handleGotoHome = () => {
        window.location.pathname = "/"
    }
    return (
        <header className="bg-[#0C3F6B] w-[100%] py-3 pt-5 md:pt-8 flex justify-between">
            <div className="ml-[5%] cursor-pointer" onClick={handleGotoHome}>
                <img src={Logo} alt="Logo" />
            </div>
            <nav className="mr-[5%] w-[40%] sm:hidden">
                <ul className="flex justify-between items-center">
                    <li id="home">
                        <Link className={window.location.pathname === "/" ? "text-[#66D2FF] font-normal text-base" : "text-white font-normal text-base"} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="text-white font-normal text-base" to="about">About us</Link>
                    </li>
                    <li>
                        <Link className="text-white font-normal text-base" to="services">
                            <a href="#about">Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link className={window.location.pathname === "/contact-us" ? "text-[#66D2FF] font-normal text-base" : "text-white font-normal text-base"} to="contact-us">Contact us</Link>
                    </li>
                    <li className="ml-7">
                        <Link className="text-white font-normal text-base" to="/">Sign in</Link>
                    </li>
                    <Link to="/contact-us">
                    <button className="contact-us text-white font-medium text-base bg-[#42B8E9] px-5 py-3 rounded-lg" onClick={handleGotoContact}>Contact Us</button>
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