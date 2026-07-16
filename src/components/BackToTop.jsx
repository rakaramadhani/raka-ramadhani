import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggle = () => setIsVisible(window.scrollY > 300);
        window.addEventListener('scroll', toggle);
        return () => window.removeEventListener('scroll', toggle);
    }, []);

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className="fixed bottom-8 right-8 z-40
                        w-12 h-12 flex items-center justify-center
                        bg-primary text-primary-foreground
                        border-2 border-border
                        shadow-[4px_4px_0_0_var(--color-border)]
                        hover:shadow-[6px_6px_0_0_var(--color-border)]
                        hover:-translate-x-0.5 hover:-translate-y-0.5
                        active:translate-x-0.5 active:translate-y-0.5
                        active:shadow-[1px_1px_0_0_var(--color-border)]
                        transition-all duration-150"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    aria-label="Back to top"
                >
                    <ChevronUp size={22} strokeWidth={3} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
