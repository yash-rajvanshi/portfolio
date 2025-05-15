import React from 'react'
import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const technologyColors = {
    "React.js": "#61dafb",     // React blue
    "JavaScript": "#f7df1e",   // JavaScript yellow
    "CSS": "#264de4",          // CSS blue
    "CSS3": "#264de4",         // CSS3 blue (same as CSS)
    "Node.js": "#339933",      // Node.js green
    "Git": "#f05032",          // Git orange-red
    "GitHub": "#171515",       // GitHub dark
    "Bootstrap": "#7952b3",    // Bootstrap purple
    "jQuery": "#0769ad",       // jQuery blue
    "ExpressJS": "#000000",    // Express black
    "HTML": "#e34c26",         // HTML orange
    "HTML5": "#e34c26",        // HTML5 orange (same as HTML)
    "Next.js": "#000000",      // Next.js black
    "TailwindCSS": "#06b6d4",  // Tailwind cyan
    "Vercel": "#000000",       // Vercel black
    ".NET": "#512bd4",         // .NET purple
    "C#": "#178600",           // C# green
    "AdonisJs": "#5a45ff",     // AdonisJs indigo
    "MySQL": "#4479a1"         // MySQL blue
};

const lightBackgroundColors = [
    "#f7df1e",  // JavaScript yellow
    "#61dafb",  // React.js blue (light enough for dark text)
    "#339933",  // Node.js green
    "#178600",   // C# green
    "#06b6d4", // Tailwind cyan
];


const Projects = () => {
    return (
        <div className='pb-4'>
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h2>

            <div className="">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center md:gap-4">
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                width={250} 
                                height={250} 
                                className='mb-6 rounded'
                            />
                        </motion.div>

                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4 mb-10"
                        >
                            <div className="flex items-center mb-2">
                                <h3 className='font-semibold text-2xl mr-2'>{project.title}</h3>
                                <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-1 rounded-md bg-blue-600 text-stone-200 hover:bg-green-500 transition-colors duration-300 text-sm"
                                >
                                    Visit Site
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                            <p className='mb-4 text-stone-400'>{project.description}</p>
                            <div className="flex flex-wrap gap-2 ">
                                {project.technologies.map((tech, index) => {
                                    const bgColor = technologyColors[tech] || "#1c1917"; // Fallback to stone-900
                                    const textColor = lightBackgroundColors.includes(bgColor) ? "#000" : "#fff";

                                    return (
                                        <span
                                            style={{
                                                backgroundColor: bgColor,
                                                color: textColor
                                            }}
                                            className="p-1 rounded text-sm font-medium"
                                            key={index}
                                        >
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects