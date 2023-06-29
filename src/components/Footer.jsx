
const Footer = () => {
  return (
<footer>
  <div className="footer__container">
    <div className="row img__row">
      <img src="./src/assets/Facebook.png" href="#"></img>
      <img src="./src/assets/Instagram.png" href="#"></img>
      <img src="./src/assets/Github.png" href="#"></img>
      <img src="./src/assets/Twitter.png" href="#"></img>
    </div>

    <div className="row">
      <ul>
        <li><a href="#">Contact me</a></li>
        <li><a href="#">My Services</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">My career</a></li>
      </ul>
    </div>

    <div className="row">
      Copyright © 2023 || Designed By: KelWin
    </div>
  </div>
</footer>
  )
}

export default Footer