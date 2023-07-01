import { useState } from "react";
import useMyContext from "../hooks/useMyContext";
import { locale } from "../utils/Context";

function About() {
  const [click, setClick] = useState(false);
  const { context } = useMyContext();

  const setFlag = () => {
    setClick(true)
  }

  const unsetFlag = () => {
    setClick(false)
  }

  return (
    <div id="about">
        <h2>{locale[context.local]["briefly"]}</h2>
        <div className="about__container">
          <div className="about__text">
            <p>{locale[context.local]["hi"]}</p>
            <p>{locale[context.local]["life"]}</p>
            <p>{locale[context.local]["right"]}</p>
          </div>
          {click 
          ? 
            <div onClick={unsetFlag} className="lightbox show">
              <img className="show__image" src="/images/about.jpg" />
            </div>
          : 
            <img className="hide__image" src="/images/about.jpg" alt={locale[context.local]["alt"]} onClick={setFlag}/>
}
        </div>

    </div>
  )
}

export default About