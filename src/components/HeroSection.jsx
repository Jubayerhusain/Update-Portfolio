import React from "react";
import heroImg from "../assets/mypic.png";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function HeroSection() {
  const [text] = useTypewriter({
    words: [
      "Building Seamless Web Experiences...",
      "From Front-End to Back-End...",
    ],
    loop: {},
    typeSpeed: 75,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section className="relative rounded-t-xl bg-gradient-to-b from-gray-900 border-none to-gray-800 text-white overflow-hidden read-the-docs">
      {/* Background shape */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply opacity-30 animate-pulse -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col items-center justify-center text-center">
        {/* Centered Image with a glowing pulse effect */}
        {/* <div className="relative mb-10 md:mb-12">

          <div className="absolute inset-0 w-full h-full bg-emerald-400 rounded-full opacity-20 animate-ping"></div>

          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white transition-transform duration-300 hover:scale-105">
            <img src={heroImg} alt="Jane Doe" className="w-full h-full object-cover" />
          </div>
        </div> */}

        {/* Centered Text Content */}
        <div className="w-full max-w-5xl space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            {text}
            <span className="text-emerald-400">
              <Cursor cursorStyle='|' />
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}