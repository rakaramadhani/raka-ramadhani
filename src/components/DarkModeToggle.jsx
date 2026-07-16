import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('darkMode');
        if (saved !== null) {
            const isDark = JSON.parse(saved);
            setDarkMode(isDark);
            applyTheme(isDark);
        } else {
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
            // Let CSS vars handle the background
            root.style.removeProperty('backgroundColor');
            body.style.removeProperty('backgroundColor');
        } else {
            root.classList.remove('dark');
            body.classList.remove('dark');
            root.style.removeProperty('backgroundColor');
            body.style.removeProperty('backgroundColor');
        }
    };

    const toggleDarkMode = () => {
        const newMode = !darkMode;
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
                className="relative p-2.5
                    bg-background border-2 border-border
                    shadow-[3px_3px_0_0_var(--color-primary)]
                    hover:shadow-[5px_5px_0_0_var(--color-primary)]
                    hover:-translate-x-0.5 hover:-translate-y-0.5
                    transition-all duration-150 group overflow-hidden"
                whileTap={{ x: 1, y: 1 }}
                aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
                {/* Hover fill */}
                <motion.div
                    className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={darkMode ? 'moon' : 'sun'}
                        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                        animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                        exit={{    rotate:  90, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.1, type: "spring", stiffness: 200 }}
                        className="relative z-10"
                    >
                        {darkMode ? (
                            <Moon size={22} className="text-foreground" strokeWidth={1.5} />
                        ) : (
                            <Sun  size={22} className="text-foreground" strokeWidth={1.5} />
                        )}
                    </motion.div>
                </AnimatePresence>
            </motion.button>

            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2
                bg-foreground text-background text-xs px-2 py-1 whitespace-nowrap
                opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {darkMode ? 'Light mode' : 'Dark mode'}
            </div>
        </motion.div>
    );
};

export default DarkModeToggle;
