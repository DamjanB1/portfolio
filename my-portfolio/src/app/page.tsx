import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  SiNextdotjs, 
  SiReact, 
  SiNodedotjs, 
  SiDjango, 
  SiJavascript,
  SiGithub 
} from "react-icons/si";
import Hero from "./components/Hero";
import Services from "./Services";
import FullScreenLoader from "./components/FullScreenLoader";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  return (
    <main className="home-page">
      <FullScreenLoader />
      <Hero />
      <Services />

      <section className="portfolio">
        <h2>My Latest Projects</h2>
        <div className="stack-sentence">
          <p>
            My stack includes:{" "}
            <SiNextdotjs className="tech-icon" title="Next.js" />
            <SiReact className="tech-icon" title="React" />
            <SiNodedotjs className="tech-icon" title="Node.js" />
            <SiDjango className="tech-icon" title="Django" />
            <SiJavascript className="tech-icon" title="JavaScript" />
          </p>
          <p>
            Here is my GitHub with all my repositories:{" "}
            <a href="https://github.com/DamjanB1?tab=repositories" target="_blank" rel="noopener noreferrer" className="github-link">
              <SiGithub className="tech-icon github-icon" title="GitHub" />
            </a>
          </p>
        </div>
        <p>
          Take a look at some of my recent work, where I combine creativity with the latest technologies to build seamless and high-performing digital experiences.
        </p>
        <p>
          Each project showcases my commitment to quality, user-centric design, and efficient development. Visit the full projects page to dive deeper into each case study and see how I bring ideas to life.
        </p>
        <a href="/projects" className="cta-button">See My Projects</a>
      </section>
    </main>
  );
};

export default Home;