import { useState } from "react";
import { Context, themes } from "../utils/Context"
import Toggle from "./Toggle"
import useMyContext from "../hooks/useMyContext";
import { locale } from "../utils/Context";

const Navbar = () => {
  const { context } = useMyContext();
  const [toggle, setToggle] = useState(window?.localStorage?.getItem('theme') === 'dark');
  const [value, setValue] = useState(window?.localStorage?.getItem('local') === 'ru'&& window.navigator.language.slice(0,2) === 'ru' ? 2 : 1);

  function chengeValue(event) {
    setValue(event.target.value);
 }

  return (
    <nav>
      <div className="nav__container">
        <div className="navLink__container">
          <a href="#about">{locale[context.local]["about"]}</a>
        </div>
        <div className="navLink__container">
          <a href="#stuck">{locale[context.local]["stuck"]}</a>
        </div>
        <div className="navLink__container">
          <a href="#projects">{locale[context.local]["project"]}</a>
        </div>
        <div className="navLink__container">
          <a href="#skills">{locale[context.local]["skill"]}</a>
        </div>
      </div>
      <div className="theme__container">
        <p>{locale[context.local]["theme"]}</p>
        <Context.Consumer>
          {({ context, setContext }) => (
            <Toggle
              isOn={toggle}
              handleToggle={() => setToggle(!toggle)}
              onChange={() => {
                if (context.theme === themes.light) setContext(prev =>{return{...prev, theme:themes.dark}})
                if (context.theme === themes.dark) setContext(prev =>{return{...prev, theme:themes.light}})
              }}
              value={context.theme === themes.light}
              />
            )}
        </Context.Consumer>
      </div>
      <div className="internacionalization__container">
      <Context.Consumer>
      {({ setContext }) => (
        <>
          <div>
            <label 
              htmlFor="btnChek1" 
              onClick={()=>{setValue(1); setContext(prev =>{return{...prev, local:'en'}})}}
              className={value == '1' ? "activated" : ''}
            >{locale[context.local]["en"]}</label>
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
              onClick={()=>{setValue(2); setContext(prev =>{return{...prev, local:'ru'}})}}
              className={value == '2' ? "activated" : ''}
            >{locale[context.local]["ru"]}</label>
            <input 
              type="radio" 
              id="btnChek2"  
              value="2"
              checked={value == '2' ? true : false}
              onChange={chengeValue}
            />
          </div>
        </>
        )}
        </Context.Consumer>
      </div>
    </nav>
  )
}

export default Navbar