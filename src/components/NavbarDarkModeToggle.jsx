import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarDarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check localStorage on mount
        const saved = localStorage.getItem('darkMode');
        if (saved !== null) {
            const isDark = JSON.parse(saved);
            setDarkMode(isDark);
            applyTheme(isDark);
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(prefersDark);
            applyTheme(prefersDark);
        }
    }, []);

    const applyTheme = (isDark) => {
        const root = document.documentElement;
        const body = document.body;
        
        if (isDark) {
            root.classList.add('dark');
            body.classList.add('dark');
            root.style.backgroundColor = '#0F0F0F';
            body.style.backgroundColor = '#0F0F0F';
        } else {
            root.classList.remove('dark');
            body.classList.remove('dark');
            root.style.backgroundColor = '#FAFAFA';
            body.style.backgroundColor = '#FAFAFA';
        }
        
        // Debug logs
        console.log('Navbar toggle - Applying theme:', isDark ? 'dark' : 'light');
    };

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        console.log('Navbar toggle - Toggling from', darkMode, 'to', newMode);
        
        setDarkMode(newMode);
        applyTheme(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
    };

    return (
        <motion.button
            onClick={toggleDarkMode}
            className="relative p-2
                border-2 border-[#0F0F0F] dark:border-[#FAFAFA]
                bg-[#FAFAFA] dark:bg-[#0F0F0F]
                shadow-[2px_2px_0_0_#000080]
                hover:shadow-[3px_3px_0_0_#000080]
                hover:-translate-x-0.5 hover:-translate-y-0.5
                transition-all duration-150 group"
            whileTap={{ x: 1, y: 1 }}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
        >
            {/* Background hover effect */}
            <motion.div
                className="absolute inset-0 bg-[#000080]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            />
            
            <AnimatePresence mode="wait">
                <motion.div
                    key={darkMode ? 'moon' : 'sun'}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    className="relative z-10"
                >
                    {darkMode ? (
                        <Moon
                            size={18}
                            className="text-[#0F0F0F] dark:text-[#FAFAFA]"
                            strokeWidth={2.5}
                        />
                    ) : (
                        <Sun
                            size={18}
                            className="text-[#0F0F0F] dark:text-[#FAFAFA]"
                            strokeWidth={2.5}
                        />
                    )}
                </motion.div>
            </AnimatePresence>


        </motion.button>
    );
};

export default NavbarDarkModeToggle;
