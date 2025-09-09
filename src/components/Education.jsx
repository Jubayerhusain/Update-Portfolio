import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from 'aos';

const Education = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    const educationData = [
        {
            degree: "8th Semester, Computer Science and Technology",
            institution: "Dinajpur Polytechnic Institute",
            year: "Ongoing (Session: 2021-2022)",
            description: "Currently pursuing advanced studies in computer science. Expected to graduate in 2025.",
        },
        {
            degree: "Secondary School Certificate",
            institution: "Aditmari GS Government School and College",
            year: "2018",
            description: "Excelled in foundational studies in mathematics and computer science.",
        },
    ];

    return (
        <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white overflow-hidden">
            {/* Angled background elements from About Me section */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-20 transform rotate-45 -mr-20 mt-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500 opacity-15 transform -rotate-30 ml-20 -mb-20 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto z-10 relative">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16" data-aos="fade-up">
                    My <span className="text-teal-400">Education</span>
                </h2>
                
                {/* Vertical Timeline Container */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full hidden md:block"></div>

                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col md:flex-row items-center mb-2 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 150}`}
                        >
                            {/* Timeline Dot (for larger screens) */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-teal-500 border-4 border-gray-800 z-10 hidden md:block"></div>
                            
                            {/* Card Container - Alternating Sides */}
                            <div className={`w-full md:w-1/2 p-4 md:p-8 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                <div
                                    className="bg-gray-700 p-6 rounded-xl shadow-xl border border-gray-600 transition-all duration-300 transform hover:scale-[1.02] hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-400/20"
                                >
                                    <h3 className="text-2xl font-semibold text-teal-400 mb-2">{item.degree}</h3>
                                    <p className="text-lg font-medium text-gray-200">{item.institution}</p>
                                    <p className="text-sm mt-2 text-gray-400">
                                        Year of Completion: <span className="text-gray-300 font-medium">{item.year}</span>
                                    </p>
                                    <p className="text-sm mt-4 text-gray-300 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;