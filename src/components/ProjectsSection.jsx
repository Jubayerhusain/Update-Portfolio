// import React, { useEffect, useState } from "react";
// import "aos/dist/aos.css";
// import AOS from "aos";

// const allProjects = [
//   {
//     //Full Stack Project 
//     category: "Full Stack",
//     title: "Parcel Management System",
//     role: "Full Stack Developer",
//     description: "Welcome to the Parcel Management System — a dynamic and feature-rich MERN stack application designed to streamline parcel delivery operations. From booking parcels to assigning delivery personnel and monitoring statuses, this app has everything covered! .",
//     features: ["User Auth (JWT)", "User-Friendly Authentication", "Responsive Design", "Admin Dashboard", "Real-time Notifications", "Parcel Tracking"],
//     image: "https://via.placeholder.com/60x60/334155/6b7280?text=FS",
//   },
//   {
//     category: "Full Stack",
//     title: "Social Media Clone",
//     role: "Full Stack Developer",
//     description: "Implemented core features of a social media platform including posts, comments, likes, and user profiles.",
//     features: ["User Profiles", "Post Management", "Real-time Updates", "Search Functionality"],
//     image: "https://via.placeholder.com/60x60/334155/6b7280?text=FS",
//   },

//   // Front End Project 
//   {
//     category: "Front End",
//     title: "Interactive Portfolio",
//     role: "Front End Developer",
//     description: "Designed and built a dynamic, responsive portfolio showcasing various projects with engaging animations.",
//     features: ["Responsive Design", "AOS Animations", "Typewriter Effect", "Skill Constellation"],
//     image: "https://via.placeholder.com/60x60/334155/6b7280?text=FE",
//   },
//   {
//     category: "Front End",
//     title: "Dashboard UI Kit",
//     role: "UI/UX Designer & Developer",
//     description: "Crafted a reusable component library for building modern administrative dashboards with various widgets.",
//     features: ["Modular Components", "Dark/Light Theme", "Data Tables", "Customizable Charts"],
//     image: "https://via.placeholder.com/60x60/334155/6b7280?text=FE",
//   },

//   // Back End Project
//   {
//     category: "Back End",
//     title: "RESTful API Service",
//     role: "Back End Developer",
//     description: "Created a scalable RESTful API to manage user data, products, and orders, with robust error handling.",
//     features: ["Express.js", "MongoDB Atlas", "Authentication", "Rate Limiting"],
//     image: "https://via.placeholder.com/60x60/334155/6b7280?text=BE",
//   },

// ];

// export default function ProjectsSection() {
//   const [activeTab, setActiveTab] = useState("All");
//   const [filteredProjects, setFilteredProjects] = useState(allProjects);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   useEffect(() => {
//     if (activeTab === "All") {
//       setFilteredProjects(allProjects);
//     } else {
//       setFilteredProjects(
//         allProjects.filter((project) => project.category === activeTab)
//       );
//     }
//   }, [activeTab]);

//   const tabs = ["All", "Full Stack", "Front End", "Back End"];

//   return (
//     <section id="Projects" className=" relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white overflow-hidden">
//       {/* Premium Background: Fluid Blob Animation */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-emerald-400 rounded-full mix-blend-multiply blur-[150px] opacity-20 transform -translate-x-1/2 -translate-y-1/2 animate-flow"></div>
//         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-600 rounded-full mix-blend-multiply blur-[120px] opacity-15 transform translate-x-1/2 animate-flow-reverse"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto z-10 text-center">
//         <h2
//           className="text-4xl sm:text-5xl font-extrabold text-white mb-12"
//           data-aos="fade-up"
//         >
//           My <span className="text-emerald-400">Projects</span>
//         </h2>

//         {/* Tabs for filtering projects */}
//         <div
//           className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === tab
//                 ? "bg-emerald-500 text-white shadow-lg"
//                 : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
//                 }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
//           {filteredProjects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:border-emerald-500 group"
//               data-aos="fade-up"
//               data-aos-delay={`${index * 150}`}
//             >
//               <div className="flex items-center mb-4">
//                 {/* Project Image/Avatar */}
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-600 group-hover:border-emerald-500 transition-colors duration-300"
//                 />
//                 <div>
//                   <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
//                     {project.title}
//                   </h3>
//                   <p className="text-sm text-gray-400">{project.role}</p>
//                 </div>
//               </div>

//               <p className="text-gray-300 text-sm mb-4 leading-relaxed">
//                 {project.description}
//               </p>

//               {/* Key Features */}
//               <div className="mt-4">
//                 <p className="text-gray-300 font-semibold mb-2">Key Features:</p>
//                 <ul className="space-y-1 text-sm text-gray-400">
//                   {project.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center">
//                       <svg
//                         className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z"
//                         />
//                       </svg>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function ProjectsSection() {
  const [repos, setRepos] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [filteredRepos, setFilteredRepos] = useState([]);

  const tabs = ["All Repositories", "Full Stack", "Front End", "Back End"];

  // Custom Projects (only for specific tabs)
  const customProjects = [
    {
      id: 1,
      name: "MERN Shop",
      description: "Full-stack e-commerce platform",
      language: "JavaScript",
      topics: ["mern", "ecommerce", "mongodb"],
      html_url: "#",
      type: "Full Stack",
    },
    {
      id: 2,
      name: "React Portfolio",
      description: "Personal portfolio with animations",
      language: "React",
      topics: ["frontend", "tailwind", "aos"],
      html_url: "#",
      type: "Front End",
    },
    {
      id: 3,
      name: "Node API",
      description: null,
      language: "Node.js",
      topics: ["backend", "express"],
      html_url: "#",
      type: "Back End",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });

    fetch("https://api.github.com/users/Jubayerhusain/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        const originalRepos = data.filter((repo) => !repo.fork);

        const sortedRepos = originalRepos.sort((a, b) => {
          if (a.description && !b.description) return -1;
          if (!a.description && b.description) return 1;
          return 0;
        });

        setRepos(sortedRepos);
        setFilteredRepos(sortedRepos);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (activeTab === "All Repositories") {
      setFilteredRepos(repos);
    } else {
      setFilteredRepos(
        customProjects.filter((project) => project.type === activeTab)
      );
    }
  }, [activeTab, repos]);

  return (
    <section
      id="Projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-emerald-400 rounded-full mix-blend-multiply blur-[150px] opacity-20 transform -translate-x-1/2 -translate-y-1/2 animate-flow"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-600 rounded-full mix-blend-multiply blur-[120px] opacity-15 transform translate-x-1/2 animate-flow-reverse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 text-center">
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-white mb-12"
          data-aos="fade-up"
        >
          My <span className="text-emerald-400">Projects</span>
        </h2>

        {/* Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === tab
                  ? "bg-emerald-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredRepos.map((repo, index) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:border-emerald-500 group"
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 text-white font-bold mr-4">
                  {repo.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {repo.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {repo.language || "Unknown"}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {repo.description || "No description provided."}
              </p>

              {/* Tech / Language Badge */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {repo.topics.map((topic, tIndex) => (
                    <span
                      key={tIndex}
                      className="bg-emerald-500 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              {/* Fallback: language badge */}
              {!repo.topics && repo.language && (
                <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {repo.language}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
