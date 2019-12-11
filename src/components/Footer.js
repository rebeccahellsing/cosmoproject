import React, {Component} from 'react';
import pic from "./pic/logotype.png"; 
import facebook from "./pic/icons/facebook-logo.png";
import twitter from "./pic/icons/twitter.png"
import pinterest from "./pic/icons/pinterest.png"
import instagram from "./pic/icons/instagram-logo.png"
import youtube from "./pic/icons/youtube.png"
import tumblr from "./pic/icons/tumblr.png"


class Footer extends Component {
render() {
  return (
    <div className="footerInner">
      <div className="footerLogo"><img src={pic} className="align-self-start mr-3" alt="logotype"/>
        <span className="socialButton"><img src={facebook} className="socialButtonImg" alt="facebook link"></img></span>
        <span className="socialButton"><img src={twitter} className="socialButtonImg" alt="twitter link"></img></span>
        <span className="socialButton"><img src={pinterest} className="socialButtonImg" alt="pinterest link"></img></span>  
        <span className="socialButton"><img src={instagram} className="socialButtonImg" alt="instagram link"></img></span>
        <span className="socialButton"><img src={youtube} className="socialButtonImg" alt="youtube link"></img></span>  
        <span className="socialButton"><img src={tumblr} className="socialButtonImg" alt="tumblr link"></img></span>  
      </div>

    <div>
      <ul className="footerMenu">
        <li className="footerMenuItem">Subrscribe</li>
        <li className="footerMenuItem">Media Kit</li>
        <li className="footerMenuItem">Other Hearst Subscriptions</li>
        <li className="footerMenuItem">Giveaways</li>
      </ul>
    </div>

   

    </div>
  );
}
}

export default Footer;