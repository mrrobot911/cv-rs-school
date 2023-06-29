import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function Stuck() {
  const pictureState = [
    ["./src/assets/gallery/css3.png", "css3"],
    ["./src/assets/gallery/html5.png", "html5"],
    ["./src/assets/gallery/js.png", "js"],
    ["./src/assets/gallery/reactjs.png", "reactjs"],
    ["./src/assets/gallery/typescript.png", "typescript"],
    ["./src/assets/gallery/redux.png", "redux"],
    ["./src/assets/gallery/tailwind.png", "tailwind"],
    ["./src/assets/gallery/git.png", "git"],
    ["./src/assets/gallery/vitejs.png", "vitejs"],
    ["./src/assets/gallery/nodejs.png", "nodejs"],
    ["./src/assets/gallery/nextjs.png", "nextjs"],
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
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [picture, autoPlay]);

  const onfocus = (e) => {
    setAutoplay(false);
    e.target.style.height = '300px'
  }
  const outFocus = (e) => {
    setAutoplay(true);
    e.target.style.height = '260px'
  }

  return (
    <div className="stuck__container">
      <h2>Stuck:</h2>
      <div className="slider__container">
        <button onClick={()=>numberPrev()}><img className="buttonArrow"src="src/assets/arrow-circle-left.svg"/></button>
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
        <button onClick={()=>numberNext()}><img className="buttonArrow"src="src/assets/arrow-circle-right.svg"/></button>
      </div>
    </div>
  )
}

export default Stuck