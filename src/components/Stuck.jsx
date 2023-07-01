import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import useMyContext from "../hooks/useMyContext";
import { locale } from "../utils/Context";

function Stuck() {
  const { context } = useMyContext();
  const pictureState = [
    ["/images/gallery/css3.png", "css3"],
    ["/images/gallery/html5.png", "html5"],
    ["/images/gallery/js.png", "js"],
    ["/images/gallery/reactjs.png", "reactjs"],
    ["/images/gallery/typescript.png", "typescript"],
    ["/images/gallery/redux.png", "redux"],
    ["/images/gallery/tailwind.png", "tailwind"],
    ["/images/gallery/git.png", "git"],
    ["/images/gallery/vitejs.png", "vitejs"],
    ["/images/gallery/nodejs.png", "nodejs"],
    ["/images/gallery/nextjs.png", "nextjs"],
  ];
  const [ number, setNumber ] = useState(5);
  const [ picture, setPicture ] = useState(pictureState.slice(0,5));
  const [ autoPlay, setAutoplay ] = useState(true);

  function numberPrev() {
    if (number -1>= 0) {
      setNumber(pre => pre -1);
    } else {
      setNumber(pictureState.length - 1);
    }
    setPicture(pre=>[pictureState[number - 6 >= 0 ? number - 6 : pictureState.length - Math.abs(number - 6)],...pre.slice(0,4)]);
  }

  function numberNext() {
    if (number + 1 < pictureState.length) {
      setNumber(pre => pre +1);
    } else {
      setNumber(0);
    }
    setPicture(pre=>[...pre.slice(1,5),pictureState[number]]);
  }
  useEffect(() => {

    if (autoPlay === false) return;
    const interval = setInterval(() => {
      numberNext();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [picture, autoPlay]);

  const onfocus = (e) => {
    setAutoplay(false);
    e.target.style.height = 'var(--image-hight)'
  }
  const outFocus = (e) => {
    setAutoplay(true);
    e.target.style.height = ''
  }

  return (
    <div id="stuck" className="stuck__container">
      <h2>{locale[context.local]["stuck"]} :</h2>
      <div className="slider__container">
        <button onClick={()=>numberPrev()}><img className="buttonArrow"src="/images/arrow-circle-left.svg"/></button>
          <div className="pictures__container">
            {picture.map(el=><div 
                key={nanoid()} 
                onMouseEnter={(e)=>e.currentTarget.children[1].style.visibility = 'visible'} 
                onMouseLeave={(e)=>e.currentTarget.children[1].style.visibility = 'hidden'}
                >
              <img 
              src={el[0]} 
              onMouseEnter={onfocus} 
              onMouseLeave={outFocus}
              />
              <p>{el[1]}</p>
            </div>)}
          </div>
        <button onClick={()=>numberNext()}><img className="buttonArrow"src="/images/arrow-circle-right.svg"/></button>
      </div>
    </div>
  )
}

export default Stuck