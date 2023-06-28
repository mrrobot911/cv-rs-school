import About from "./About.jsx"
import Progects from "./Progects.jsx"
import Skills from "./Skills.jsx"
import Stuck from "./Stuck.jsx"

const Content = () => {
  return (
    <div className="content__container">
      <About />
      <Stuck />
      <Progects />
      <Skills />
    </div>
  )
}

export default Content