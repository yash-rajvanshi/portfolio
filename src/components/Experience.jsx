import React from 'react'
import { EXPERIENCES } from '../constants'
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

const Experience = () => {
    return (
        <div className='pb-4'>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Experience</motion.h2>
            <div className=''>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1 }} className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-stone-400">
                                {experience.year}
                            </p>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4">
                            <h3 className='mb-2 font-semibold'>{experience.role} - {""}
                                <span className="text-sm text-stone-500">{experience.company}</span>
                            </h3>
                            <p className="mb-4 text-stone-400">{experience.description}</p>
                            {experience.technologies.map((tech, index) => {
                                const bgColor = technologyColors[tech] || "#1c1917"; // Fallback to stone-900
                                const textColor = lightBackgroundColors.includes(bgColor) ? "#000" : "#fff";

                                return (
                                    <span
                                        style={{
                                            backgroundColor: bgColor,
                                            color: textColor
                                        }}
                                        className="mr-2 mt-4 rounded px-2 py-1 text-sm font-medium"
                                        key={index}
                                    >
                                        {tech}
                                    </span>
                                );
                            })}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
