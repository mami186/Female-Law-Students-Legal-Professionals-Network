"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bgsh1">
        {/* Grid layout for background - Desktop: 2fr 1fr, Tablet: 1fr 1fr, Mobile: no grid */}
        <div className="absolute inset-0 hidden lg:grid lg:grid-cols-[1fr_2fr]">
          <motion.div 
            className="bg-bgsh1 transition-all duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="bg-cover bg-center relative transition-all duration-300 ease-in-out"
            style={{ backgroundImage: "url(/hero.jpg)" }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* Gradient overlay on the image area */}
            <div className="absolute inset-0 bg-gradient-to-r from-bgsh1 via-transparent via-25% dark:via-50% to-transparent transition-all duration-300 ease-in-out"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-bgsh1 via-transparent via-25% dark:via-50% to-transparent transition-all duration-300 ease-in-out"></div>
          </motion.div>
        </div>

        {/* Tablet view: 1fr 1fr */}
        <div className="absolute inset-0 hidden md:grid md:grid-cols-2 lg:hidden">
          <motion.div 
            className="bg-bgsh1 transition-all duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="bg-cover bg-center relative transition-all duration-300 ease-in-out"
            style={{ backgroundImage: "url(/hero.jpg)" }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* Gradient overlay on the image area */}
            <div className="absolute inset-0 bg-gradient-to-r from-bgsh1 via-transparent via-25% dark:via-50% to-transparent transition-all duration-300 ease-in-out"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-bgsh1 via-transparent via-25% dark:via-50% to-transparent transition-all duration-300 ease-in-out"></div>
          </motion.div>
        </div>

        {/* Mobile view: full width image */}
        <div className="absolute inset-0 md:hidden">
          <motion.div
            className="bg-cover bg-center w-full h-full transition-all duration-300 ease-in-out"
            style={{ backgroundImage: "url(/hero.jpg)" }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* Gradient overlay for mobile */}
            <div className="absolute inset-0 bg-gradient-to-b from-bgsh1/50 via-bgsh1/30 to-bgsh1/70 transition-all duration-300 ease-in-out"></div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[2fr_1fr] md:grid-cols-2 gap-12 items-center lg:mb-10 relative z-10 mb-90 lg:mr-80">
          {/* Content on the left */}
          <motion.div 
            className="text-center md:text-left py-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h1 
              className="font-serif text-background_3 dark:text-background_3 text-4xl md:text-5xl lg:text-6xl font-semibold  leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Female Law Students &
              <motion.span 
                className="text-background_3 dark:text-background_3 block mt-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Legal Professionals Network
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-foreground dark:text-foreground mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Empowering female law students and legal professionals through mentorship, networking, and career development opportunities.
            </motion.p>
            
            <motion.div 
              className="flex flex-row gap-2 sm:gap-4 justify-center md:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("join")}
                className="btn border bg-background_6 dark:bg-background_6 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 w-fit sm:w-auto"
              >
                Join the Network
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("join")}
                className="btn border bg-background_4 dark:bg-background_4 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 w-fit sm:w-auto"
              >
                Become a Mentor
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("events")}
                className="btn border bg-background_5 dark:bg-background_5 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 w-fit sm:w-auto"
              >
                Explore Activities
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - space for image */}
          <div className="hidden md:block"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
