import About from "./About.jsx"
import Hero from "./Hero.jsx"
import Projects from "./Projects.jsx"
import ScrollToTop from "./Scroll.jsx"
import Skills from "./Skills.jsx"
import Stuck from "./Stuck.jsx"

const Content = () => {
  return (
    <main className="content__container">
      <Hero />
      <About />
      <Stuck />
      <Projects />
      <Skills />
      <ScrollToTop />
    </main>
  )
}

export default Content