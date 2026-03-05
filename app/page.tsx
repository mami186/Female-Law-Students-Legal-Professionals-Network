import About from "@/components/About";
import { Footer } from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Team from "@/components/Team";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-bgsh1">
        <Header />

        <Hero />

        <AnimatedSection
          id="about"
          className="py-18 px-6 sm:py-8 md:py-12 bg-bgsh1 dark:bg-bgsh1"
          delay={0.2}
        >
          <About />
        </AnimatedSection>

        <AnimatedSection
          id="events"
          className="py-24 px-6 bg-bgsh2"
          delay={0.4}
        >
          <Events />
        </AnimatedSection>

        <AnimatedSection
          id="team"
          className="py-24 px-6 lg:pt-18 lg:pb-24 bg-bgsh1 dark:bg-bgsh1"
          delay={0.6}
        >
          <Team />
        </AnimatedSection>

        <AnimatedSection
          id="join"
          className="py-10 px-6 lg:py-18 text-foreground bg-bgsh2"
          delay={0.8}
        >
          <Form />
        </AnimatedSection>

        <AnimatedSection
          id="contact"
          className="text-Ptext bg-footer_1 dark:text-Ptext"
          delay={1.0}
        >
          <Footer />
        </AnimatedSection>
      </div>
    </>
  );
}
