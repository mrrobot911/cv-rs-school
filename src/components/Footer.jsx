import useMyContext from "../hooks/useMyContext";
import { locale } from "../utils/Context";

const Footer = () => {
  const { context } = useMyContext();
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
<footer>    
  <div className="footer__container">
    <ul className="row img__row">
      <li><img src="/images/Facebook.png" onClick={() => openInNewTab('https/facebook.com/')}></img></li>
      <li><img src="/images/Instagram.png" onClick={() => openInNewTab('https://instagram.com')}></img></li>
      <li><img src="/images/Github.png" onClick={() => openInNewTab('https://github.com/mrrobot911')}></img></li>
      <li><img src="/images/Twitter.png" onClick={() => openInNewTab('https/twitter.com/')}></img></li>
      <li><img className="rss" src="/images/rss.svg" onClick={() => openInNewTab('https://rs.school/')}></img></li>
    </ul>

    <div className="row">
      <ul>
        <li><a href="#">{locale[context.local]["contact-fut"]}</a></li>
        <li><a href="https://github.com/mrrobot911" target="_blank" rel="noopener noreferrer">{locale[context.local]["services"]}</a></li>
        <li><a href="https://www.privacypolicies.com/"target="_blank" rel="noopener noreferrer">{locale[context.local]["privacy"]}</a></li>
        <li><a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" target="_blank" rel="noopener noreferrer">{locale[context.local]["terms"]}</a></li>
        <li><a href="#">{locale[context.local]["career"]}</a></li>
      </ul>
    </div>

    <div className="row">
      {locale[context.local]["copy"]}
    </div>
  </div>
</footer>
  )
}

export default Footer