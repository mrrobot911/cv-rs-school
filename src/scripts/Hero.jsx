import TextTyper from "./TextTyper.jsx"

const Hero = () => {

  const textToRender = ['This is code for one', 'This is code for two']
  
  return (
    <section className="hero__section">
        <div className="hero__container">
          <div className="wrap">
            <img className="circle"/>
          </div>
          <h1>Hi, my name KelWin!</h1>
        </div>
        <div className="hero__container">
          <TextTyper text={textToRender[0]} interval={50} Markup={"p"}/>
        </div>
    </section>
  )
}

export default Hero