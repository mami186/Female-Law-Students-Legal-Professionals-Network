import About from "@/components/About";
import { Footer } from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-bgsh1">
        <Header />

        <Hero />

        <section
          id="about"
          className="py-18 px-6 sm:py-8 md:py-12  bg-bgsh1 dark:bg-bgsh1"
        >
          <About />
        </section>

        {/* <section id="activities" className="py-24 px-6 bg-white ">
          <Activity />
        </section> */}

        <section id="events" className="py-24 px-6 bg-bgsh2 ">
          <Events />
        </section>

        <section
          id="team"
          className="py-24 px-6 lg:pt-18 lg:pb-24 bg-bgsh1 dark:bg-bgsh1 "
        >
          <Team />
        </section>

        <section
          id="join"
          className="py-10 px-6 lg:py-18 text-foreground bg-bgsh2   "
        >
          <Form />
        </section>

        <section id="contact" className=" text-Ptext dark:text-Ptext bg-footer_1  ">
          <Footer />
        </section>
      </div>
    </>
  );
}
