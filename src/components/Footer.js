import React, {Component} from 'react';
import pic from "../logotype.png"; 
import facebook from "../icons/facebook-logo.png";
import twitter from "../icons/twitter.png"
import pinterest from "../icons/pinterest.png"
import instagram from "../icons/instagram-logo.png"
import youtube from "../icons/youtube.png"
import tumblr from "../icons/tumblr.png"


class Footer extends Component {
render() {
  return (
    <div className="footerInner">
      <div className="footerLogo"><img src={pic} className="align-self-start mr-3" alt="..."/>
        <span className="socialButton"><img src={facebook} className="socialButtonImg"></img></span>
        <span className="socialButton"><img src={twitter} className="socialButtonImg"></img></span>
        <span className="socialButton"><img src={pinterest} className="socialButtonImg"></img></span>  
        <span className="socialButton"><img src={instagram} className="socialButtonImg"></img></span>
        <span className="socialButton"><img src={youtube} className="socialButtonImg"></img></span>  
        <span className="socialButton"><img src={tumblr} className="socialButtonImg"></img></span>  
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