"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Team = () => {
  const team = [
    {
      role: "Founder",
      image: "/founder .jpg",
    },
    {
      role: "President",
      image: "/President.jpg",
    },

  ];

  return (
    <>
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            The dedicated leaders driving our mission forward
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {team.map((member, index) => {
            // Determine animation direction based on position
            const getAnimationProps = (idx: number) => {
              if (idx === 0) return { initial: { opacity: 0, x: -80 }, animate: { opacity: 1, x: 0 } }; // Left
              if (idx === 1) return { initial: { opacity: 0, y: 80 }, animate: { opacity: 1, y: 0 } }; // Center (bottom)
              return { initial: { opacity: 0, x: 80 }, animate: { opacity: 1, x: 0 } }; // Right
            };
            
            const animationProps = getAnimationProps(index);
            
            return (
              <motion.div
                key={index}
                initial={animationProps.initial}
                whileInView={animationProps.animate}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="group relative overflow-hidden rounded-[48px] border-2 border-transparent transition-all duration-500 cursor-pointer shadow-xl aspect-3/4 hover:border-[var(--bgbd)]/30 dark:hover:border-[var(--bgbd)]/50"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={member.image}
                  alt={member.role}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-bgsh1/80 dark:via-bgsh1/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h3 
                    className="font-serif text-xl font-semibold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.3 + (0.1 * index) }}
                  >
                    {member.role}
                  </motion.h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.h3 
            className="font-serif text-4xl font-semibold text-foreground mb-8 text-center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Executives
          </motion.h3>
          <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scrollbar-hide">
            {[
              {
                role: "Vice President",
                image: "/vice president.jpg",
              },
              {
                role: "Secretary",
                image: "/secretary.jpg",
              },
              {
                role: "Program Lead",
                image: "/program leader.jpg",
              },
              {
                role: "Public Relations",
                image: "/public relations.jpg",
              },
              {
                role: "Event Planner",
                image: "/event planner.jpg",
              },
              {
                role: "Head of Comms",
                image: "/head of communication and media.jpg",
              },
              {
                role: "Resource Allocation",
                image: "/head of resource allocation.jpg",
              },
              {
                role: "Mentorship & Tutoring",
                image: "/head of mentorship and training.jpg",
              },
              {
                role: "Event Coordinator",
                image: "/event coordinator.jpg",
              },
              {
                role: "Cinematogripher",
                image: "/cinimatogropher.JPEG",
              },
            ].map((exec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.03 * index }}
                className="min-w-[45%] md:min-w-[19%] snap-center group relative overflow-hidden rounded-[48px] border-2 border-transparent transition-all duration-500 cursor-pointer shadow-xl aspect-3/4 shrink-0 hover:border-[var(--bgbd)]/30 dark:hover:border-[var(--bgbd)]/50"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={exec.image}
                  alt={exec.role}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-bgsh1/80 dark:via-bgsh1/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <motion.h3 
                    className="font-serif text-sm font-semibold text-white leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 1.1 + (0.05 * index) }}
                  >
                    {exec.role}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Team;
