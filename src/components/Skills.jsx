import { useState } from "react";

function Skills() {
  const [lang, setLang] = useState(false);
  const [ide, setIde] = useState(false);
  const [os, setOs] = useState(false)

  return (
    <section id="skills">
        <h2>Skills:</h2>
        <ul className="skills__container">
          <li>
            <div className="skills__head" onClick={() => setLang(!lang)}>
              <button ><h3>Languages</h3></button>
              <span className={lang ? "rotate__up" : "rotate__down"}/>
            </div>
            {lang && 
            <article className="skills__List">
              <p>English</p>
              <p>Ukrainian</p>
              <p>Russian</p>
            </article>
          } 
          <hr/>
          </li>
          <li>
            <div className="skills__head" onClick={() => setIde(!ide)}>
              <button ><h3>IDE</h3></button>
              <span className={ide ? "rotate__up" : "rotate__down"}/>
            </div>
            {ide && 
            <article className="skills__List">
              <p>Visual Studio Code</p>
              <p>Neo Vim</p>
            </article>
            }
          <hr/> 
          </li>
          <li>
            <div className="skills__head" onClick={() => setOs(!os)}>
              <button ><h3>OS</h3></button>
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