import { useState, useEffect } from 'react';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const height = document.body.scrollHeight - window.innerHeight;
            if (height > 0) setScrollProgress((window.scrollY / height) * 100);
        };
        window.addEventListener('scroll', update);
        return () => window.removeEventListener('scroll', update);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 right-0 h-1 bg-[#000080] z-50 origin-left"
            style={{
                transform: `scaleX(${scrollProgress / 100})`,
                transition: 'transform 0.1s linear',
            }}
        />
    );
};

export default ScrollProgress;
