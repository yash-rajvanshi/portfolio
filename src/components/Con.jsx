"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Con = () => {
  const text = "Contact Me";
  const textForm = "Let's Connect";
  
  // Get environment variables
  const serviceId = import.meta.env.VITE_NEXT_PUBLIC_SERVICE_ID;
  const templateId = import.meta.env.VITE_NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_NEXT_PUBLIC_PUBLIC_KEY;

  // Initialize EmailJS
  emailjs.init(publicKey);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setLoading(true);
    
    // For debugging
    const formData = new FormData(form.current);
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form Output:", formValues);

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        console.log("SUCCESS!");
        setSuccess(true);
        form.current.reset();
        setTimeout(() => setSuccess(false), 3000);
      }, (error) => {
        console.log("FAILED...", error.text);
        console.log(serviceId, templateId, publicKey);
        setError(true);
        setTimeout(() => setError(false), 3000);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <motion.div
      className="h-full w-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col lg:flex-row py-12 md:py-16 lg:py-24">
        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl mb-8 lg:mb-0">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* FORM Container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-2 sm:px-4">
          <div className="w-full max-w-md bg-transparent rounded-xl">
            <div className="border-l-4 border-green-400 pl-4 sm:pl-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-300 mb-6">{textForm}</h2>
              
              <form onSubmit={sendEmail} ref={form} className="space-y-6">
              <div>
                  <label htmlFor="from_name" className="text-stone-300 font-medium">My name is:</label>
                  <input
                    name="from_name"
                    id="from_name"
                    type="text"
                    placeholder="Enter your name here..."
                    className="w-full mt-2 px-0 py-2 bg-transparent border-b border-gray-300 focus:border-green-400 focus:outline-none transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-stone-300 font-medium">Dear Yash,</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={3}
                    placeholder="Write your message here..."
                    className="w-full mt-2 px-0 py-2 bg-transparent border-b border-gray-300 focus:border-green-400 focus:outline-none transition-all duration-200 resize-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="from_email" className="text-stone-300 font-medium">My mail address is:</label>
                  <input
                    name="from_email"
                    id="from_email"
                    type="email"
                    placeholder="name@example.com"
                    className="w-full mt-2 px-0 py-2 bg-transparent border-b border-gray-300 focus:border-green-400 focus:outline-none transition-all duration-200"
                    required
                  />
                </div>
                
                
                
                <p className="text-stone-300 font-medium pt-2">Regards</p>
                
                <div className="pt-4">
                  <div className="relative">
                    {/* Rocket flames (visible on hover) */}
                    <motion.div 
                      className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-12 opacity-0 group-hover:opacity-100 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div 
                        className="w-8 h-16"
                        initial={{ scale: 0 }}
                        whileHover={{ 
                          scale: [0.5, 1, 0.8, 1, 0.5], 
                          transition: { repeat: Infinity, duration: 0.5 } 
                        }}
                      >
                        <div className="w-full h-full bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent rounded-b-full blur-md" />
                      </motion.div>
                    </motion.div>
                    
                    {/* The rocket button */}
                    <motion.button 
                      type="submit" 
                      disabled={loading}
                      className="px-6 py-2 sm:px-8 sm:py-3 bg-transparent border-2 border-green-400 text-white font-medium rounded-full hover:bg-green-400 hover:text-black transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center relative overflow-visible group"
                      whileHover={{ 
                        y: [0, -4, -2, -4, -2, -4, 0], 
                        scale: 1.05,
                        transition: { 
                          y: { repeat: Infinity, duration: 0.8, repeatType: "loop" },
                          scale: { duration: 0.2 }
                        }
                      }}
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send
                          <Send size={16} className="ml-2" />
                        </span>
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>
              
              {/* Success and error messages */}
              <AnimatePresence>
                {success && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 text-green-500 font-medium flex items-center"
                  >
                    <CheckCircle size={16} className="mr-2" />
                    Your message has been sent successfully!
                  </motion.div>
                )}
                
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 text-red-500 font-medium flex items-center"
                  >
                    <AlertCircle size={16} className="mr-2" />
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Con;