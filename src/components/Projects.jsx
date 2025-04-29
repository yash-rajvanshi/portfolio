import React from 'react'
import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

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
                                {project.technologies.map((tech, index) => (
                                    <span 
                                        className="p-1 rounded bg-stone-900 text-sm font-medium text-stone-300" 
                                        key={index}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects