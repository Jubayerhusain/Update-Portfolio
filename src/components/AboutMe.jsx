import aboutimg from '../assets/aboutme.jpg';
import React from 'react';

const AboutMe = () => {
    return (
        <section id="About Me" className=" relative pb-10 sm:pb-24 border-none px-4 sm:px-6 lg:px-8 bg-gray-800 text-white overflow-hidden">
            {/* Angled background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-20 transform rotate-45 -mr-20 mt-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500 opacity-15 transform -rotate-30 ml-20 -mb-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-16">

                    {/* Text Content Section - now on the left for a different feel */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6 animate-fade-in-up">
                            Hello, I'm <span className="text-blue-400">Abdulla Ibna Jubayer</span>.
                        </h2>
                        <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-200">
                           I'm a MERN Stack and Full Stack Web Developer building visually appealing, user-friendly, and responsive web applications. With expertise in Node.js, Express.js, MongoDB, React.js, Next.js, TypeScript, and Tailwind CSS, I create high-performing solutions that merge functionality with design. I also have strong experience with component libraries, building scalable and maintainable UI components efficiently.
                        </p>
                        <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto lg:mx-0 animate-fade-in-up delay-400">
                            My expertise spans user research, prototyping, interaction design, and front-end principles. I thrive on bringing ideas to life and collaborating with teams to build meaningful solutions.
                        </p>
                        <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5 animate-fade-in-up delay-600">
                            <a
                                href="https://drive.usercontent.google.com/u/0/uc?id=1OSxkDsYQIitteA_hFqvuPtO8SM6-qkzR&export=download"
                                // target='_blank'
                                className="px-8 py-3 border border-transparent text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                            >
                               Download Resume
                            </a>
                            <a
                                href="#Contact"
                                className="px-8 py-3 border border-blue-400 text-lg font-medium rounded-full text-blue-400 hover:bg-blue-900 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                            >
                                Let's Connect
                            </a>
                        </div>
                    </div>

                    {/* Profile Image Section - now on the right */}
                    <div className="w-full lg:w-2/5 flex justify-center lg:justify-end animate-fade-in-right">
                        <div className="relative p-3 rounded-full bg-gradient-to-br from-blue-500 to-green-500 shadow-2xl">
                            <img
                                src={aboutimg}
                                alt="Your Name"
                                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-gray-800"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;