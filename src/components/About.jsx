import { useState } from "react";

function About() {
  const [click, setClick] = useState(false);

  const setFlag = () => {
    setClick(true)
  }

  const unsetFlag = () => {
    setClick(false)
  }

  return (
    <div id="about">
        <h2>Briefly About Myself:</h2>
        <div className="about__container">
          <div className="about__text">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;I’m Evgeniy, but people call me “KelWin” I’m a frontend developer, and I specialize in efficient React apps and CSS & HTML that just work across all platforms and browsers. I care deeply about building interfaces that are usable and pleasant for the most number of people possible.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;My professional life has been 100% driven by my passion for design and structure. I was sketching crazy detailed 3d models for fun when I was a kid, started building promo websites for small businesses while in school, then developed an app for my gaming guild in my university days. For three years, I’ve worked for an e-commerce platform in Berlin, where I was able to drive a 10% growth in sales by shaving five seconds from the website’s loading time. After that, I was in charge of implementing and launching the mobile app for a large European medical supply provider, which I was able to complete in just under three months. Not that learning React Native at the same time made things easy for me. Still, in the end, I was able to deliver an app that’s used by hundreds of distributors and direct customers daily and did so on-time and on-budget.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Right now, I’m excited about the still very complicated WebAssembly, and working towards becoming a React senior. In the following years, I also plan to explore the “server-side” more and become a better-rounded full-stack dev.</p>
          </div>
          {click 
          ? 
            <div onClick={unsetFlag} className="lightbox show">
              <img className="show__image" src="./src/assets/about.jpg" />
            </div>
          : 
            <img className="hide__image" src="./src/assets/about.jpg" onClick={setFlag}/>
}
        </div>

    </div>
  )
}

export default About