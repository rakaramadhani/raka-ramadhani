import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarDarkModeToggle = () => {
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
        } else {
            root.classList.remove('dark');
            body.classList.remove('dark');
        }
        // Let CSS vars (--background) drive the actual bg color — no inline styles
        root.style.removeProperty('backgroundColor');
        body.style.removeProperty('backgroundColor');
    };

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        applyTheme(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
    };

    return (
        <motion.button
            onClick={toggleDarkMode}
            className="relative p-2
                border-2 border-border
                bg-background text-foreground
                shadow-[2px_2px_0_0_var(--color-primary)]
                hover:shadow-[3px_3px_0_0_var(--color-primary)]
                hover:-translate-x-0.5 hover:-translate-y-0.5
                transition-all duration-150 group"
            whileTap={{ x: 1, y: 1 }}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
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
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    className="relative z-10"
                >
                    {darkMode ? (
                        <Moon size={18} className="text-foreground" strokeWidth={2.5} />
                    ) : (
                        <Sun  size={18} className="text-foreground" strokeWidth={2.5} />
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
};

export default NavbarDarkModeToggle;
