import TextTyper from "./TextTyper.jsx"

const Hero = () => {
  const textToRender = ['This is code for one', 'This is code for two']
  return (
    <section className="hero__section">
        <div className="hero__container">
          <div className="wrap">
            <img className="circle"/>
          </div>
          <h1 className="lineUp">Hi, my name KelWin!</h1>
          <div>
            <h2>Contact information:</h2>
            <div className="hero__contacts">
              {/* <img className="contactImg" src="/src/assets/phone.png"/>
              <img className="contactImg" src="/src/assets/telegram.png"/> */}
              
            </div>
          </div>
        </div>
        <div className="hero__container hero__code">
          <TextTyper text={textToRender[0]} interval={50} Markup={"p"}/>
        </div>
    </section>
  )
}

export default Hero