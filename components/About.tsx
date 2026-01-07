import { GraduationCap, Handshake, Megaphone, Star } from "lucide-react";

const About = () => {
  return (
    <section className="bg-background dark:background text-foreground ">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-12">
        {/* About Section */}
        <div className="text-center lg:text-left flex-1">
          <h3 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            About Us
          </h3>

          <p className="leading-relaxed text-foreground/70 max-w-3xl mx-auto lg:mx-0">
            The Female Law Students and Legal Professionals Network, Haramaya
            University Chapter, was officially established in{" "}
            <strong className="text-foreground">October 2021</strong> by Ms.
            Zebiba Musemma, with the support of Ms. Urji Biso, Bethlehem, Dr.
            Richard, and the College of Law at Haramaya University.
          </p>

          <p className="leading-relaxed text-foreground/70 max-w-3xl mx-auto lg:mx-0 mt-4">
            The Network is a student-led initiative dedicated to empowering
            female law students and young legal professionals through
            mentorship, advocacy, leadership, and professional development.
          </p>

          <p className="leading-relaxed text-foreground/70 max-w-3xl mx-auto lg:mx-0 mt-4">
            In 2025, the Network is being relaunched with a range of impactful
            activities.
          </p>
        </div>

        {/* Goals Section */}
        <div className="flex-1">
          <h3 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-10">
            Our Goals
          </h3>

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
              <div
                key={index}
                className="flex items-start gap-2 p-4 rounded-xl border border-foreground/20 bg-white"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <goal.icon className="w-5 h-5 text-primary" />
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {goal.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
