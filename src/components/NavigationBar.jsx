import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarDarkModeToggle from "./NavbarDarkModeToggle";

const Menus = [
    { path: "home",       name: "Home" },
    { path: "about",      name: "About" },
    { path: "project",    name: "Project" },
    { path: "experience", name: "Experience" },
    { path: "contact",    name: "Contact" },
];

const NavigationBar = () => {
    const [activeMenu, setActiveMenu]   = useState("home");
    const [isMenuOpen, setIsMenuOpen]   = useState(false);
    const [scrolled,   setScrolled]     = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest("nav")) setIsMenuOpen(false);
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isMenuOpen]);

    const handleSetActive = (menu) => {
        setActiveMenu(menu);
        setIsMenuOpen(false);
    };

    const menuVariants = {
        closed: { x: "100%", transition: { type: "spring", stiffness: 400, damping: 40 } },
        open:   { x: "0%",   transition: { type: "spring", stiffness: 400, damping: 40 } },
    };

    const linkVariants = {
        closed: { x: 20, opacity: 0 },
        open:   { x: 0,  opacity: 1  },
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-30 transition-all duration-200
                bg-[#FAFAFA] dark:bg-[#0F0F0F]
                border-b-2 border-[#0F0F0F] dark:border-[#0F0F0F]
                ${scrolled ? "shadow-[0_4px_0_0_#0F0F0F]" : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <nav className="flex flex-wrap items-center justify-between px-6 py-4 mx-auto max-w-screen-xl">

                {/* Logo */}
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.15 }}>
                    <h1 className="font-black text-2xl uppercase tracking-tight text-[#0F0F0F] dark:text-[#FAFAFA]"
                        style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                        Raka<span className="text-[#000080]">Ramadhani</span>
                    </h1>
                </motion.div>

                {/* Hamburger */}
                <motion.button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-[#0F0F0F] dark:text-[#FAFAFA] focus:outline-none z-50 relative
                        border-2 border-[#0F0F0F] dark:border-[#FAFAFA] p-1.5
                        hover:bg-[#000080] hover:text-white hover:border-[#000080]
                        transition-colors duration-150"
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isMenuOpen ? "close" : "open"}
                            initial={{ rotate: 0 }}
                            animate={{ rotate: isMenuOpen ? 180 : 0 }}
                            exit={{ rotate: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.div>
                    </AnimatePresence>
                </motion.button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:gap-8">
                    <ul className="flex flex-row items-center gap-1">
                        {Menus.map((menu, index) => (
                            <motion.li
                                key={menu.path}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <Link
                                    to={menu.path}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => handleSetActive(menu.path)}
                                    className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wider cursor-pointer
                                        transition-all duration-150 select-none
                                        ${activeMenu === menu.path
                                            ? "bg-[#000080] text-white border-2 border-[#000080] shadow-[2px_2px_0_0_#0F0F0F]"
                                            : "text-[#0F0F0F] dark:text-[#FAFAFA] border-2 border-transparent hover:border-[#0F0F0F] dark:hover:border-[#FAFAFA] hover:shadow-[2px_2px_0_0_#0F0F0F]"
                                        }`}
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                >
                                    {menu.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                    <NavbarDarkModeToggle />
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                className="fixed inset-0 bg-black/60 md:hidden z-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMenuOpen(false)}
                            />

                            {/* Mobile Menu Panel */}
                            <motion.div
                                className="fixed top-0 right-0 h-full w-3/4 max-w-sm
                                    bg-[#FAFAFA] dark:bg-[#0F0F0F]
                                    border-l-4 border-[#0F0F0F] dark:border-[#FAFAFA]
                                    shadow-[-6px_0_0_0_#000080]
                                    md:hidden z-30"
                                variants={menuVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                            >
                                <div className="flex flex-col h-full pt-20 px-6">
                                    <ul className="flex flex-col gap-3">
                                        {Menus.map((menu, index) => (
                                            <motion.li
                                                key={menu.path}
                                                variants={linkVariants}
                                                initial="closed"
                                                animate="open"
                                                transition={{ delay: index * 0.08 }}
                                            >
                                                <Link
                                                    to={menu.path}
                                                    smooth={true}
                                                    duration={500}
                                                    onClick={() => handleSetActive(menu.path)}
                                                    className={`block py-3 px-4 text-base font-semibold uppercase tracking-wider cursor-pointer
                                                        border-2 transition-all duration-150
                                                        ${activeMenu === menu.path
                                                            ? "bg-[#000080] text-white border-[#000080] shadow-[3px_3px_0_0_#0F0F0F]"
                                                            : "text-[#0F0F0F] dark:text-[#FAFAFA] border-[#0F0F0F] dark:border-[#FAFAFA] hover:bg-[#000080] hover:text-white hover:border-[#000080]"
                                                        }`}
                                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                                >
                                                    {menu.name}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* Mobile Dark Mode Toggle */}
                                    <motion.div
                                        className="mt-8 pt-6 border-t-2 border-[#0F0F0F] dark:border-[#FAFAFA]"
                                        variants={linkVariants}
                                        initial="closed"
                                        animate="open"
                                        transition={{ delay: Menus.length * 0.08 + 0.1 }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-[#0F0F0F] dark:text-[#FAFAFA] font-semibold uppercase text-sm tracking-wider"
                                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                                Dark Mode
                                            </span>
                                            <NavbarDarkModeToggle />
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};

export default NavigationBar;
