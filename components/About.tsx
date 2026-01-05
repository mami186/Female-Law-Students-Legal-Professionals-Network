import { Form, GraduationCap, Handshake, Megaphone, Star } from "lucide-react";

const About = () => {
  return (
    <>
      <div className="flex flex-row  container mx-auto max-w-6xl">
        <div className="text-center mx-12">
          <h3 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            About Us
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            The Female Law Students and Legal Professionals Network, Haramaya
            University Chapter, was officially established in{" "}
            <strong>October 2021</strong> by Ms. Zebiba Musemma, with the
            support of Ms. Urji Biso, Bethlehem, Dr. Richard, and the College of
            Law at Haramaya University.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-4">
            The Network is a student-led initiative dedicated to empowering
            female law students and young legal professionals. It provides
            mentorship, advocacy programs, leadership opportunities, and
            professional development activities to address the challenges women
            face in the legal field.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-4">
            Although the Network has faced various challenges over time, it has
            continued to grow and thrive. In 2025, the Network is being
            relaunched with a range of impactful activities.
          </p>
        </div>

        <div>
          <div className="container mx-12 max-w-6xl">
            <div className="text-center">
              <h3 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
                Our Goals
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6"></div>
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
                className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <goal.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground">{goal.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
