import { PhoneAndroid } from "@mui/icons-material";
import React, { useEffect } from "react";

const Contact = () => {
    // Note: The AOS library cannot be directly imported in this environment.
    // The visual effects will not work without it.
    useEffect(() => {
        // Fallback for AOS if it were available
        // AOS.init({ duration: 1500, once: true });
    }, []);

    // Inline SVG for icons to avoid external library dependencies
    const EnvelopeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
    );


    const PhoneIcon = () => (
        <PhoneAndroid />
    );

    const FacebookIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.58-1.333h2.42v-3h-3.404c-3.154 0-4.596 1.485-4.596 4.333v2.667z" />
        </svg>
    );

    const LinkedinIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5zm-.4 5.5h-4.2v14h4.2v-14zm11.75 0h-4.14v14h4.14v-7.234c0-3.414 3.737-3.125 3.737 0v7.234h4.14v-8.348c0-5.698-4.212-6.58-6.077-3.958-1.077-1.328-.584-3.094-1.29-4.234z" />
        </svg>
    );

    const GithubIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.997.107-.775.418-1.305.762-1.605-2.665-.3-5.466-1.33-5.466-5.931 0-1.311.465-2.381 1.236-3.221-.124-.302-.534-1.524.11-3.179 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.645 1.655.235 2.877.12 3.179.77.84 1.235 1.911 1.235 3.221 0 4.61-2.801 5.626-5.476 5.922.42.36.812 1.101.812 2.219v3.329c0 .319.192.694.8.576 4.765-1.589 8.196-6.095 8.196-11.385 0-6.627-5.373-12-12-12z" />
        </svg>
    );

    return (
        <>
            <section id="Contact" className="relative  bg-gray-950 text-white overflow-hidden flex items-center justify-center">
                {/* Premium Background: Fluid Blob Animation */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-emerald-400 rounded-full mix-blend-multiply blur-[150px] opacity-20 transform -translate-x-1/2 -translate-y-1/2 animate-flow"></div>
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-600 rounded-full mix-blend-multiply blur-[120px] opacity-15 transform translate-x-1/2 animate-flow-reverse"></div>
                </div>

                <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 z-10 p-8 rounded-3xl backdrop-blur-sm bg-gray-900/40 ">
                    {/* Left Section - Contact Info */}
                    <div className="flex flex-col items-center p-8 rounded-2xl">
                        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white text-center">
                            Let's <span className="text-emerald-400">Connect</span>
                        </h2>
                        <p className="text-center text-gray-300 mt-4 max-w-lg mx-auto">
                            "Start a conversation with me! Let's collaborate and create amazing solutions together."
                        </p>
                        <div className="mt-8 space-y-4 text-center">
                            <div className="flex items-center justify-center gap-3 text-gray-300 transition-all duration-300 hover:text-emerald-400">
                                <EnvelopeIcon />
                                <a href="mailto:jubayerhusain360@gmail.com" className="hover:underline">jubayerhusain360@gmail.com</a>
                            </div>
                            <div className="flex items-center justify-center gap-3 text-gray-300">
                                <PhoneIcon />
                                <span>+880 130 511 3004</span>
                            </div>
                        </div>
                        <div className="flex mt-8 gap-6">
                            <a href="https://www.facebook.com/jubayer.husain.627354" target="_blank" rel="noopener noreferrer" className="text-white transition-all duration-300 transform hover:scale-125 hover:text-blue-500">
                                <FacebookIcon />
                            </a>
                            <a href="https://www.linkedin.com/in/jubayer-husain-a83490330" target="_blank" rel="noopener noreferrer" className="text-white transition-all duration-300 transform hover:scale-125 hover:text-blue-600">
                                <LinkedinIcon />
                            </a>
                            <a href="https://github.com/Jubayerhusain" target="_blank" rel="noopener noreferrer" className="text-white transition-all duration-300 transform hover:scale-125 hover:text-gray-400">
                                <GithubIcon />
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <form className="p-8 rounded-xl relative">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-10">
                            Send Me a <span className="text-emerald-400">Message</span>
                        </h2>
                        <div className="space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="bg-gray-800 border border-gray-700 w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400 transition-colors duration-300"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-gray-800 border border-gray-700 w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400 transition-colors duration-300"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="bg-gray-800 border border-gray-700 w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400 transition-colors duration-300"
                                rows={5}
                            ></textarea>
                        </div>
                        <div className="flex justify-center mt-10">
                            <a
                                href="#"
                                rel="noopener noreferrer"
                                className="inline-block bg-gradient-to-r from-emerald-400 to-blue-500 hover:from-blue-500 hover:to-emerald-400 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                            >
                                SEND MESSAGE
                            </a>
                        </div>
                    </form>
                </div>
            </section>
            <footer className="w-full text-center bg-emerald-500 text-gray-900 text-md py-5 font-bold">
                <p>Designed and Developed by Jubayer Husain</p>
            </footer>
        </>
    );
};

export default Contact;
