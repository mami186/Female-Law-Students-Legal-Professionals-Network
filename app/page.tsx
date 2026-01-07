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

        <section id="about" className="py-18 px-6 sm:py-8 md:py-12  bg-background ">
          <About />
        </section>

        <section id="activities" className="py-24 px-6 bg-white ">
          <Activity />
        </section>

        <section id="team" className="py-24 px-6 lg:pt-18 lg:pb-24 bg-background ">
          <Team />
        </section>

        <section id="join" className="py-10 px-6 lg:py-18 bg-background_2 ">
          <Form />
        </section>

        <section className=" text-Ptext dark:text-Ptext bg-bgbd  ">
          <Footer />
        </section>
      </div>
    </>
  );
}
