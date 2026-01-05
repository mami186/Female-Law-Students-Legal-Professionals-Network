import React from "react";

const Hero = () => {
  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">
              Haramaya University Chapter
            </span>
          </div>
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
