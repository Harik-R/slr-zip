// components/BackToTopButton.js

import { useEffect, useState } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full ${isVisible ? 'visible' : 'invisible'
                }`}
            onClick={scrollToTop}
            aria-label="Back to Top"
        >
            ↑
        </button>
    );
};

export default BackToTopButton;
