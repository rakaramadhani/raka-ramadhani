import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Menus = [
    {path: "home", name:"Home"},
    {path: "about", name:"About Me"},
    {path: "project", name:"Project"},
    {path: "experience", name:"Experience"},
    {path: "contact", name:"Contact"},

];

const NavigationBar = () => {
    const [activeMenu, setActiveMenu] = useState("home"); // Default aktif di "home"
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk hamburger menu

    const handleSetActive = (menu) => {
        setActiveMenu(menu);
        setIsMenuOpen(false); // Tutup menu saat item diklik
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle buka/tutup menu
    };

    const menuStyle = "text-xl font-medium block py-2 px-3 rounded-sm cursor-pointer transition duration-300";
    const activeStyle = "text-blue-600 font-bold";
    const inActiveStyle = "text-gray-900 hover:text-blue-600";

    return (
        <header className="fixed top-0  left-0 right-0 z-20 shadow-md bg-white">
        <nav className="flex flex-wrap items-center justify-between px-6 py-4 md:mx-auto max-w-screen-xl">
            {/* Logo */}
            <div>
                <h1 className="font-bold text-2xl">Raka<span className="text-[#FF543E]">Ramadhani</span></h1>
            </div>

            {/* Hamburger Button */}
            <button onClick={toggleMenu} className="md:hidden text-gray-900 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Navigation Menu */}
            <div className={`absolute md:static bg-white md:flex md:items-center md:space-x-8 
                            md:w-auto w-full left-0 transition-all duration-500 ease-in-out 
                            ${isMenuOpen ? "top-16 opacity-100" : "top-[-300px] opacity-0"} md:opacity-100 md:top-0`}>
                <ul className="flex md:flex-row flex-col md:items-center md:gap-6 gap-4 text-center">
                    {Menus.map((menu) => (
                        <li key={menu}>
                            <Link
                                to={menu.path}
                                smooth={true}
                                duration={500}
                                className={`${menuStyle} ${activeMenu === menu.path ? activeStyle : inActiveStyle}`}
                                onClick={() => handleSetActive(menu.path)}
                            >
                                {menu.name} {/* Kapitalisasi pertama */}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
        </header>
    );
};

export default NavigationBar;
