import About from "@/components/About";
import Activity from "@/components/Activity";
import { Footer } from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />

        <Hero />

        <section id="about" className="py-24 px-6 bg-secondary">
          <About />
        </section>

        <section id="activities" className="py-24 px-6 bg-secondary">
          <Activity/>
        </section>

        <section id="team" className="py-24 px-6">
          <Team />
        </section>

        {/* Who Can Join */}
        <section className="py-24 px-6 bg-secondary">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif text-4xl md:text-5xl font-semibold text-black mb-6">
                  Ready to Join?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Membership is open to female law students and young legal
                  professionals who want to grow academically, professionally,
                  and personally.
                </p>
                <ul className="space-y-3">
                  {[
                    "Female law students at Haramaya University",
                    "Young legal professionals starting their careers",
                    "Individuals passionate about leadership, advocacy, and women's rights",
                    "Supporters of gender equality in law",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-8 bg-background rounded-2xl border border-border">
                        <section id="join" className="px-24 py-6 ">
          <Form />
        </section>
              </div>
            </div>
          </div>
        </section>


        <Footer />
      </div>
    </>
  );
}
