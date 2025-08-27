import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DarkModeToggle = () => {
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
        console.log('Applying theme:', isDark ? 'dark' : 'light');
        console.log('Root classes:', root.className);
        console.log('Body classes:', body.className);
        console.log('Root background:', root.style.backgroundColor);
        console.log('Body background:', body.style.backgroundColor);
    };

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        console.log('Toggling from', darkMode, 'to', newMode);
        
        setDarkMode(newMode);
        applyTheme(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
    };

    return (
        <motion.div
            className="fixed top-24 right-6 md:top-6 md:right-8 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
        >
            <motion.button
                onClick={toggleDarkMode}
                className="relative bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-600 rounded-full p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
                {/* Background gradient animation */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 dark:from-blue-600 dark:via-purple-600 dark:to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ borderRadius: '50%' }}
                />
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={darkMode ? 'moon' : 'sun'}
                        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.1, type: "spring", stiffness: 200 }}
                        className="relative z-10"
                    >
                        {darkMode ? (
                            <Moon 
                                size={22} 
                                className="text-blue-400 drop-shadow-sm" 
                                strokeWidth={1.5}
                            />
                        ) : (
                            <Sun 
                                size={22} 
                                className="text-yellow-500 drop-shadow-sm" 
                                strokeWidth={1.5}
                            />
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Ripple effect */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-current opacity-0"
                    whileTap={{ opacity: 0.1, scale: 1.2 }}
                    transition={{ duration: 0.1 }}
                />
            </motion.button>

            {/* Tooltip */}
            <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-slate-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                initial={{ y: -5, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
            >
                {darkMode ? 'Light mode' : 'Dark mode'}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 dark:bg-slate-700 rotate-45" />
            </motion.div>
        </motion.div>
    );
};

export default DarkModeToggle;
