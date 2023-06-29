
const Footer = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
<footer>
  <div className="footer__container">
    <div className="row img__row">
      <img src="./src/assets/Facebook.png" onClick={() => openInNewTab('https/facebook.com/')}></img>
      <img src="./src/assets/Instagram.png" onClick={() => openInNewTab('https://instagram.com')}></img>
      <img src="./src/assets/Github.png" onClick={() => openInNewTab('https://github.com/mrrobot911')}></img>
      <img src="./src/assets/Twitter.png" onClick={() => openInNewTab('https/twitter.com/')}></img>
      <img className="rss" src="./src/assets/rss.svg" onClick={() => openInNewTab('https://rs.school/')}></img>
    </div>

    <div className="row">
      <ul>
        <li><a href="#">Contact me</a></li>
        <li><a href="https://github.com/mrrobot911" target="_blank" rel="noopener noreferrer">My Services</a></li>
        <li><a href="https://www.privacypolicies.com/"target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
        <li><a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
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