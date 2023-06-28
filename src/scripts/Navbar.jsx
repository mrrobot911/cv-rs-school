import { useState } from "react";
import { ThemeContext, themes } from "../utils/ThemeContext"
import Toggle from "./Toggle"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(1);
  function chengeValue(event) {
    setValue(event.target.value);
 }
   
  return (
    <nav>
      <div className="nav__container">
        <div className="navLink__container">
          <p>About me</p>
        </div>
        <div className="navLink__container">
          <p>My Stuck</p>
        </div>
        <div className="navLink__container">
          <p>My projects</p>
        </div>
        <div className="navLink__container">
          <p>Scills</p>
        </div>
      </div>
      <div className="theme__container">
        <p>Theme switcher</p>
        <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
            <Toggle
              isOn={toggle}
              handleToggle={() => setToggle(!toggle)}
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark)
                if (theme === themes.dark) setTheme(themes.light)
              }}
              value={theme === themes.dark}
            />
          )}
        </ThemeContext.Consumer>
      </div>
      <div className="internacionalization__container">
        <div>
          <label 
            htmlFor="btnChek1" 
            onClick={()=>setValue(1)}
            className={value == '1' ? "activated" : ''}
          >EN</label>
          <input 
            type="radio" 
            id="btnChek1" 
            value="1"
            checked={value == '1' ? true : false}
            onChange={chengeValue}
          />
        </div>
        <div>
          <label 
            htmlFor="btnChek2" 
            onClick={()=>setValue(2)}
            className={value == '2' ? "activated" : ''}
          >RU</label>
          <input 
            type="radio" 
            id="btnChek2"  
            value="2"
            checked={value == '2' ? true : false}
            onChange={chengeValue}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar