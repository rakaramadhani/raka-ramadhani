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
            root.style.backgroundColor = '#0f172a';
            body.style.backgroundColor = '#0f172a';
        } else {
            root.classList.remove('dark');
            body.classList.remove('dark');
            root.style.backgroundColor = '#ffffff';
            body.style.backgroundColor = '#ffffff';
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
            className="relative p-2 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
        >
            {/* Background hover effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-pink-400/20 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-indigo-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                            className="text-slate-600 dark:text-blue-400" 
                            strokeWidth={2}
                        />
                    ) : (
                        <Sun 
                            size={18} 
                            className="text-yellow-600 dark:text-yellow-500" 
                            strokeWidth={2}
                        />
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Ripple effect */}
            <motion.div
                className="absolute inset-0 rounded-lg bg-current opacity-0"
                whileTap={{ opacity: 0.1, scale: 1.2 }}
                transition={{ duration: 0.1 }}
            />
        </motion.button>
    );
};

export default NavbarDarkModeToggle;
