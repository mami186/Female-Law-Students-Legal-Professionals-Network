"use client";
import React from "react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      const content =
        element.querySelector(".section-pulse-target") ||
        element.querySelector(".container") ||
        element;

      setTimeout(() => {
        content.classList.add("animate-scale-pulse");
        setTimeout(() => {
          content.classList.remove("animate-scale-pulse");
        }, 500);
      }, 1200);
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bgsh1">
        {/* Grid layout for background - Desktop: 2fr 1fr, Tablet: 1fr 1fr, Mobile: no grid */}
        <div className="absolute inset-0 hidden lg:grid lg:grid-cols-[1fr_2fr]">
          <div className="bg-bgsh1"></div>
          <div
            className="bg-cover bg-center relative"
            style={{ backgroundImage: "url(/hero.jpg)" }}
          >
            {/* Gradient overlay on the image area */}
            <div className="absolute inset-0 bg-gradient-to-r from-bgsh1 via-transparent via-25% dark:via-50% to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-bgsh1 via-transparent via-25% dark:via-50% to-transparent"></div>
          </div>
        </div>

        {/* Tablet view: 1fr 1fr */}
        <div className="absolute inset-0 hidden md:grid md:grid-cols-2 lg:hidden">
          <div className="bg-bgsh1"></div>
          <div
            className="bg-cover bg-center relative"
            style={{ backgroundImage: "url(/hero.jpg)" }}
          >
            {/* Gradient overlay on the image area */}
            <div className="absolute inset-0 bg-gradient-to-r from-bgsh1 via-transparent via-25% dark:via-50% to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-bgsh1 via-transparent via-25% dark:via-50% to-transparent"></div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-[2fr_1fr] md:grid-cols-2 gap-12 items-center">
            {/* Content on the left */}
            <div className="text-center md:text-left py-12">
              <h1 className="font-serif text-background_3 dark:text-background_3 text-4xl md:text-5xl lg:text-6xl font-semibold  leading-tight mb-6">
                Female Law Students &
                <span className="text-background_3 dark:text-background_3 block mt-2">
                  Legal Professionals Network
                </span>
              </h1>
              <p className="text-lg text-black max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed">
                Empowering Female Law Students and Connecting Future Legal
                Leaders. We promote leadership, advocacy, rights awareness, and
                professional growth through mentorship, training, and networking
                opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection("join")}
                  className="btn border bg-background_6 dark:bg-background_6"
                >
                  Join the Network
                </button>
                <button
                  onClick={() => scrollToSection("join")}
                  className="btn border bg-background_4 dark:bg-background_4"
                >
                  Become a Mentor
                </button>
                <button
                  onClick={() => scrollToSection("events")}
                  className="btn border bg-background_5 dark:bg-background_5"
                >
                  Explore Activities
                </button>
              </div>
            </div>

            {/* Right side - space for image */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
