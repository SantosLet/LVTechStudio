import Hero from "@/app/sections/Hero";
import AboutMe from "@/app/sections/AboutMe";
import Testimonials from "./sections/Testimonials";
import Closing from "./sections/Closing";
import Contact from "./sections/Contact";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import SoftSkills from "./sections/SoftSkills";

export default function Home() {
  return (
    <div className="home-page container-page">
      <Hero/>
      <AboutMe/>
      <Services/>
      <Projects/>
      <SoftSkills/>
      <Testimonials/>
      <Closing/>
      <Contact/>
    </div>
  );
}
