import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            
            if (scrollHeight > 0) {
                setScrollProgress((currentProgress / scrollHeight) * 100);
            }
        };

        window.addEventListener('scroll', updateScrollProgress);
        
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary-dark dark:from-blue-400 dark:via-purple-400 dark:to-indigo-500 z-50 origin-left"
            style={{
                scaleX: scrollProgress / 100,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrollProgress / 100 }}
            transition={{ duration: 0.1 }}
        />
    );
};

export default ScrollProgress;
