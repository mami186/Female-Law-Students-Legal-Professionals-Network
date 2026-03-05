"use client";
import { GraduationCap, Handshake, Megaphone, Star } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="text-foreground ">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-12">
        {/* About Section */}
        <motion.div 
          className="text-center lg:text-left flex-1"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-semibold mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Us
          </motion.h2>

          <motion.p 
            className="leading-relaxed text-foreground/70 max-w-3xl mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            The Female Law Students and Legal Professionals Network, Haramaya
            University Chapter, was officially established in{" "}
            <strong className="text-foreground">October 2021</strong> by Ms.
            Zebiba Musemma, with the support of Ms. Urji Biso, Bethlehem, Dr.
            Richard, and the College of Law at Haramaya University.
          </motion.p>

          <motion.p 
            className="leading-relaxed text-foreground/70 max-w-3xl mx-auto lg:mx-0 mt-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            The Network is a student-led initiative dedicated to empowering
            female law students and young legal professionals through
            mentorship, advocacy, leadership, and professional development.
          </motion.p>

          <motion.p 
            className="leading-relaxed text-foreground/70 max-w-3xl mx-auto lg:mx-0 mt-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            In 2025, the Network is being relaunched with range of impactful
            activities.
          </motion.p>
        </motion.div>

        {/* Goals Section */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-semibold text-center mb-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Goals
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: GraduationCap,
                text: "Enhance the academic and professional skills of female law students.",
              },
              {
                icon: Handshake,
                text: "Promote mentorship and networking between students and legal professionals.",
              },
              {
                icon: Megaphone,
                text: "Raise awareness on women's legal rights and gender justice.",
              },
              {
                icon: Star,
                text: "Foster leadership, advocacy, and professional growth among members.",
              },
            ].map((goal, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-2 p-4 rounded-xl border border-foreground/20 bg-bgsh2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <goal.icon className="w-5 h-5 text-bgbd" />
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {goal.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
