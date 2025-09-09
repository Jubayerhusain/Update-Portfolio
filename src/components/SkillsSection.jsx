import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const skills = [
  // Core Fundamentals
  { name: "Git/GitHub", x: 45, y: 30, connections: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "VPS (aaPanel)"] },
  { name: "JavaScript", x: 45, y: 65, connections: ["React", "CSS3", "Node.js", "TypeScript", "Redux"] },
  { name: "HTML5", x: 55, y: 20, connections: ["CSS3", "React"] },
  { name: "CSS3", x: 70, y: 50, connections: ["HTML5", "Tailwind CSS", "Component Library"] },

  // Front-End Frameworks & Libraries
  { name: "React", x: 20, y: 30, connections: ["JavaScript", "Next.js", "Redux", "Component Library"] },
  { name: "Next.js", x: 10, y: 20, connections: ["React", "TypeScript"] },
  { name: "Redux", x: 30, y: 45, connections: ["React", "JavaScript"] },
  { name: "Component Library", x: 80, y: 40, connections: ["React", "CSS3", "Tailwind CSS"] },
  { name: "Tailwind CSS", x: 85, y: 60, connections: ["CSS3", "Component Library"] },

  // Backend & Databases
  { name: "Node.js", x: 25, y: 80, connections: ["Express.js", "MongoDB", "JavaScript", "TypeScript"] },
  { name: "Express.js", x: 10, y: 50, connections: ["Node.js"] },
  { name: "MongoDB", x: 30, y: 5, connections: ["Node.js", "Mongoose"] },
  { name: "Mongoose", x: 20, y: 10, connections: ["MongoDB"] },

  // Other Tools & Concepts
  { name: "TypeScript", x: 60, y: 80, connections: ["JavaScript", "Node.js", "Zod"] },
  { name: "Zod", x: 70, y: 70, connections: ["TypeScript"] },
  { name: "VPS (aaPanel)", x: 90, y: 15, connections: [] },
];

function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="Skills" className="relative p-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-gray-900 text-white min-h-[60vh] flex flex-col justify-center items-center">
      {/* Background shape */}
      <div className="absolute top-10 right-96 w-72 h-72 bg-gray-700 rounded-full mix-blend-multiply opacity-30 blur-2xl animate-pulse"></div>

      <div className="container mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-16"
          data-aos="fade-up"
        >
          My <span className="text-emerald-400">Skills</span>
        </h2>
      </div>

      <div className="relative w-full max-w-7xl aspect-[16/9] border border-gray-700 rounded-xl overflow-hidden shadow-2xl">
        {/* Background grid for a high-tech feel */}
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

        {/* Lines between skills */}
        <svg className="absolute inset-0 w-full h-full z-10">
          {skills.map((skill, index) =>
            skill.connections.map((connectionName, connIndex) => {
              const connectedSkill = skills.find(s => s.name === connectionName);
              if (!connectedSkill) return null;
              const isConnected = hoveredSkill === skill.name || hoveredSkill === connectedSkill.name;
              return (
                <line
                  key={`${index}-${connIndex}`}
                  x1={`${skill.x}%`}
                  y1={`${skill.y}%`}
                  x2={`${connectedSkill.x}%`}
                  y2={`${connectedSkill.y}%`}
                  className={`stroke-emerald-400 transition-all duration-300 ${isConnected ? 'stroke-opacity-100 animate-line-pulse' : 'stroke-opacity-20'}`}
                />
              );
            })
          )}
        </svg>

        {/* Skill Nodes */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="absolute z-20 transition-all duration-300 cursor-pointer"
            style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className={`relative p-2 rounded-full transition-all duration-300 ${hoveredSkill === skill.name ? 'ring-2 ring-emerald-400 scale-125' : 'ring-1 ring-gray-600'}`}>
              <div className="h-4 w-4 rounded-full bg-emerald-400 shadow-lg" />
            </div>
            <p className="absolute -translate-x-1/2 mt-3 text-center text-sm font-semibold text-gray-400 group-hover:text-emerald-400 transition-colors duration-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;