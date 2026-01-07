import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center bg-white justify-center px-6 overflow-hidden">
        {/* Blurred background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat  blur-s scale-110 -z-20"
          style={{ backgroundImage: "var(--bg-image)" }}
        ></div>

        {/* Purple tint overlay */}
        <div className="absolute inset-0 bg-purple-200/10 dark:bg-purple-950/10 -z-10"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-foreground leading-tight mb-6">
            Female Law Students &
            <span className="text-primary block mt-2">
              Legal Professionals Network
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Empowering Female Law Students and Connecting Future Legal Leaders.
            We promote leadership, advocacy, rights awareness, and professional
            growth through mentorship, training, and networking opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary">Join the Network</button>
            <button className="btn btn-outline">Become a Mentor</button>
            <button className="btn btn-ghost">Explore Activities</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
