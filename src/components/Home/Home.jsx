import React from 'react';
import { Link } from 'react-router-dom'; // Correct import for React

const Home = () => {
    return (
        <div id="Home" className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
            {/* Video Background */}
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover z-0" 
                autoPlay 
                loop 
                muted 
                playsInline
                aria-hidden="true"
            >
                <source src="/Videos/HomePage_background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10" />

            {/* Dark Overlay on the Left */}
            <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-sky-900/90 to-transparent z-20" />

            {/* Content */}
            <div className="relative z-30 flex items-center justify-center h-[calc(100vh-80px)]">
                <div className="w-full lg:w-3/5 text-center px-4">

                    {/* Heading */}
                    <h1 className="text-4xl lg:text-6xl text-center text-gray-400 mb-8">
                        Quantum Secure For Safe Data Transmission Application
                    </h1>
                    <br />

                    {/* Get Started Button */}
                    <Link to="/dashboard">
                        <button className="bg-white text-black font-medium px-8 py-3 rounded-full w-fit hover:bg-gray-100 transition-colors">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
