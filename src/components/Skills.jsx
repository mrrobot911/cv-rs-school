import { useState } from "react";
import useMyContext from "../hooks/useMyContext";
import { locale } from "../utils/Context";

function Skills() {
  const [lang, setLang] = useState(false);
  const [ide, setIde] = useState(false);
  const [os, setOs] = useState(false);
  const { context } = useMyContext();

  return (
    <section id="skills">
        <h2>{locale[context.local]["skill"]} :</h2>
        <ul className="skills__container">
          <li>
            <div className="skills__head" onClick={() => setLang(!lang)}>
              <button ><h3>{locale[context.local]["lang"]}</h3></button>
              <span className={lang ? "rotate__up" : "rotate__down"}/>
            </div>
            {lang && 
            <article className="skills__List">
              <p>{locale[context.local]["lang-e"]}</p>
              <p>{locale[context.local]["lang-u"]}</p>
              <p>{locale[context.local]["lang-r"]}</p>
            </article>
          } 
          <hr/>
          </li>
          <li>
            <div className="skills__head" onClick={() => setIde(!ide)}>
              <button ><h3>{locale[context.local]["ide"]}</h3></button>
              <span className={ide ? "rotate__up" : "rotate__down"}/>
            </div>
            {ide && 
            <article className="skills__List">
              <p>Visual Studio Code</p>
              <p>Neovim</p>
            </article>
            }
          <hr/> 
          </li>
          <li>
            <div className="skills__head" onClick={() => setOs(!os)}>
              <button ><h3>{locale[context.local]["os"]}</h3></button>
              <span className={os ? "rotate__up" : "rotate__down"}/>
            </div>
            {os && 
            <article className="skills__List">
              <p>Ubuntu</p>
              <p>Windows</p>
            </article>
            }
          <hr/> 
          </li>
        </ul>
    </section>
  )
}

export default Skills