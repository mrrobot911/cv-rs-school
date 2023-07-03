import { useState } from "react";
import useMyContext from "../hooks/useMyContext";
import { locale } from "../utils/Context";

const Hero = () => {
  const text1 = 'kelwin2705@gmail.com';
  const text2 = '@kelwin27';
  const text3 = 'github.com/mrrobot911';
  const text4 = 'kelwin911';
  const { context } = useMyContext();
  const [ show, setShow ] = useState(false);
  const [ showBtn, setShowBtn ] = useState(false);

  const copyLink =(e) =>{
    navigator.clipboard.writeText(e.target.value);
    setShow(true);
    setTimeout(() => {
      setShow(false);
       }, 1000);
  }
  const copyCode = (e) =>{
    navigator.clipboard.writeText(e.target.parentElement.textContent);
    setShow(true);
    setTimeout(() => {
      setShow(false);
       }, 1000);
  }
  return (
    <section className="hero__section">
      <div className="hero__container">
        <div className="wrap">
          <img className="circle"/>
        </div>
        <h1 className="lineUp">{locale[context.local]["h1"]}</h1>
        <div>
          <h2 className="contacts__head">{locale[context.local]["contact"]}</h2>
          <ul className="hero__contacts">
            <li><p>E-mail:</p><button value={text1} onClick={(e)=>copyLink(e)}>{text1}</button></li>
            <li><p>Telegram:</p><button value={text2} onClick={(e)=>copyLink(e)}>{text2}</button></li>
            <li><p>Github:</p><button value={text3} onClick={(e)=>copyLink(e)}>{text3}</button></li>
            <li><p>Discord:</p><button value={text4} onClick={(e)=>copyLink(e)}>{text4}</button></li>
            {show && <p className="alert__copy">{locale[context.local]["alert"]}</p>}
          </ul>
        </div>
      </div>
      <pre className="hero__container hero__code" onMouseEnter={()=>setShowBtn(!showBtn)} onMouseLeave={()=>setShowBtn(!showBtn)}>
          <p><span className="codePurple">const</span> <span className="codeFiol">car1</span> = &#123;</p>
          <p>    maker: <span className="codeYellow">&apos; Ford &apos;</span>,</p>
          <p>    model: <span className="codeYellow">&apos; Fiesta &apos;</span>,</p>
          <p>        <span className="codeGreen">drive</span> <span className="codePurple">&#40;&#41; &#123;</span></p>
          <p>    <span className="codePurple">console</span>.<span className="codeGreen">log</span> &#40;<span className="codeYellow">&#96;Driving a</span> $&#123;<span className="codeFiol">this</span>.maker&#125; $&#123;<span className="codeFiol">this</span>.model&#125;</p>
          <p>    <span className="codeYellow">car!&#96;</span>&#41;&#59;</p>
          <p>    <span className="codePurple">&#125;</span></p>
          <p>&#125;</p>
          <p><span className="codePurple">const</span> <span className="codeFiol">anotherCar</span> = &#123;</p>
          <p>    maker: <span className="codeYellow">&apos; Audi &apos;</span>,</p>
          <p>    model: <span className="codeYellow">&apos; A4 &apos;</span></p>
          <p>&#125;</p>
          <p><span className="codeFiol">car1</span>.<span className="codeGreen">drive</span>.<span className="codeGreen">bind</span>&#40;<span className="codeFiol">anotherCar</span>&#41;&#40;&#41;</p>
          <p><span className="codeGrey">&#47;&#47;Driving a Audi A4 car!</span></p>
          <p><span className="codePurple">const</span> <span className="codeFiol">car2</span> = &#123;</p>
          <p>    maker: <span className="codeYellow">&apos; Ford &apos;</span>,</p>
          <p>    model: <span className="codeYellow">&apos; Fiesta &apos;</span>,</p>
          <p>&#125;</p>
          <p><span className="codePurple">const</span> <span className="codeGreen">drive</span> = <span className="codePurple">function</span>&#40;kmh&#41; &#123;</p>
          <p>    <span className="codePurple">console</span>.<span className="codeGreen">log</span>&#40; <span className="codeYellow">&#96;Driving a</span> $&#123;<span className="codeFiol">this</span>.maker&#125; $&#123;<span className="codeFiol">this</span>.model&#125; </p>
          <p><span className="codeYellow">car at</span> $&#123;kmh&#125;<span className="codeYellow">km/h!&#96;</span>&#41;</p>
          <p>&#125;</p>
          <p><span className="codeGreen">drive</span>.<span className="codeGreen">call</span>&#40;<span className="codeFiol">car2</span>, <span className="codeFiol">100</span>&#41;</p>
          <p><span className="codeGrey">&#47;&#47;Driving a Ford Fiesta car at 100 km/h!</span></p>
          <p><span className="codeGreen">drive</span>.<span className="codeGreen">apply</span>&#40;<span className="codeFiol">car2</span>, [<span className="codeFiol">100</span>]&#41;</p>
          <p><span className="codeGrey">&#47;&#47;Driving a Ford Fiesta car at 100 km/h!</span></p>
        {showBtn && <button onClick={(e)=>copyCode(e)}>{locale[context.local]["codecopy"]}</button>}
      </pre>
    </section>
  )
}

export default Hero
