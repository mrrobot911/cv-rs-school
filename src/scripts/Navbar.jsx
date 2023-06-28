import { useState } from "react";
import { ThemeContext, themes } from "../utils/ThemeContext"
import Toggle from "./Toggle"

const Navbar = () => {
  const [value, setValue] = useState(false);
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
              isOn={value}
              handleToggle={() => setValue(!value)}
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
        <p>EN</p>
        <p>RU</p>
      </div>
    </nav>
  )
}

export default Navbar