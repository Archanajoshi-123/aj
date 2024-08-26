import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import circlearrow from './images/uparrow.svg'; // Ensure the image path is correct
import './Scrolltracker.css'

const ScrollTracker = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            const scrollProgress = (scrollTop / totalHeight) * 100;
            setProgress(scrollProgress);

            // Show or hide scroll tracker based on scroll position
            setIsVisible(scrollTop > 100); // Adjust the threshold as needed
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run the handler once to set initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div style={{ ...trackerStyle, display: isVisible ? 'flex' : 'none' }}>
            <CircularProgressbar 
                value={progress} 
                styles={buildStyles({
                    pathColor: '#d97706', // Customize the color here
                    trailColor: '#d6d6d6'
                })}
            />
            <div style={arrowContainerStyle} onClick={scrollToTop}>
                <img src={circlearrow} alt='Up Arrow' style={arrowStyle} />
            </div>
        </div>
    );
};

const trackerStyle = {
    position: 'fixed',
    bottom: '96px',
    right: '41px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    zIndex: 1000
};

const arrowContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
};

const arrowStyle = {
    width: '20px',
    height: '20px'
};

export default ScrollTracker;
