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
          <Activity />
        </section>

        <section id="team" className="py-24 px-6">
          <Team />
        </section>

        <section className="py-24 px-6 bg-secondary">
          <Form />
        </section>

        <Footer />
      </div>
    </>
  );
}
