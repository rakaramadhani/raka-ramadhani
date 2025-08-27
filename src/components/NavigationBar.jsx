import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarDarkModeToggle from "./NavbarDarkModeToggle";

const Menus = [
    {path: "home", name:"Home"},
    {path: "about", name:"About"},
    {path: "project", name:"Project"},
    {path: "experience", name:"Experience"},
    {path: "certificate", name:"Certificate"},
    {path: "contact", name:"Contact"},

];

const NavigationBar = () => {
    const [activeMenu, setActiveMenu] = useState("home"); // Default aktif di "home"
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk hamburger menu
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Close menu when clicking outside
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('nav')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    const handleSetActive = (menu) => {
        setActiveMenu(menu);
        setIsMenuOpen(false); // Tutup menu saat item diklik
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuStyle = "text-xl font-medium block py-2 px-3 rounded-sm cursor-pointer transition duration-300";
    const activeStyle = "text-blue-600 font-bold";
                        const inActiveStyle = "text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400";

    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
        open: {
            x: "0%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    };

    const linkVariants = {
        closed: { x: 20, opacity: 0 },
        open: { x: 0, opacity: 1 },
    };

    return (
        <motion.header 
            className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white dark:bg-slate-900 shadow-mg' 
                    : 'bg-white dark:bg-slate-900 shadow-md'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="flex flex-wrap items-center justify-between px-6 py-4 md:mx-auto max-w-screen-xl">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <h1 className="font-bold text-2xl text-gray-900 dark:text-white">
                        Raka<span className="text-[#FF543E]">Ramadhani</span>
                    </h1>
                </motion.div>

                {/* Hamburger Button */}
                <motion.button 
                    onClick={toggleMenu} 
                    className="md:hidden text-gray-900 dark:text-white focus:outline-none z-50 relative"
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isMenuOpen ? 'close' : 'open'}
                            initial={{ rotate: 0 }}
                            animate={{ rotate: isMenuOpen ? 180 : 0 }}
                            exit={{ rotate: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </motion.div>
                    </AnimatePresence>
                </motion.button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:space-x-8">
                    <ul className="flex flex-row items-center gap-6">
                        {Menus.map((menu, index) => (
                            <motion.li 
                                key={menu.path}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={menu.path}
                                    smooth={true}
                                    duration={500}
                                    className={`${menuStyle} ${activeMenu === menu.path ? activeStyle : inActiveStyle} relative`}
                                    onClick={() => handleSetActive(menu.path)}
                                >
                                    {menu.name}
                                    {activeMenu === menu.path && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                            layoutId="activeIndicator"
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                    
                    {/* Dark Mode Toggle for Desktop */}
                    <NavbarDarkModeToggle />
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                className="fixed inset-0 bg-black/50 md:hidden z-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMenuOpen(false)}
                            />
                            
                            {/* Mobile Menu */}
                            <motion.div
                                className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white dark:bg-slate-800 shadow-2xl md:hidden z-30"
                                variants={menuVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                            >
                                <div className="flex flex-col h-full pt-20 px-6">
                                    <ul className="flex flex-col gap-6">
                                        {Menus.map((menu, index) => (
                                            <motion.li 
                                                key={menu.path}
                                                variants={linkVariants}
                                                initial="closed"
                                                animate="open"
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <Link
                                                    to={menu.path}
                                                    smooth={true}
                                                    duration={500}
                                                    className={`text-xl font-medium block py-3 px-4 rounded-lg cursor-pointer transition-all duration-300 ${
                                                        activeMenu === menu.path 
                                                            ? 'text-white bg-primary shadow-lg' 
                                                            : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary-extra-light dark:hover:bg-slate-700'
                                                    }`}
                                                    onClick={() => handleSetActive(menu.path)}
                                                >
                                                    {menu.name}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    
                                    {/* Dark Mode Toggle for Mobile */}
                                    <motion.div
                                        className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700"
                                        variants={linkVariants}
                                        initial="closed"
                                        animate="open"
                                        transition={{ delay: Menus.length * 0.1 + 0.1 }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">
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
