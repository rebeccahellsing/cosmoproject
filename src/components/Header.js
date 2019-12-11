import React, {Component} from 'react';
import headerImg from "./pic/cosmoheader.gif";


class Header extends Component {
render() {
  return (
    <header className="container">
  
   <img src= {headerImg} className ="headerImg" alt={"background environment"}></img>
  

    </header>
  );
}
}

export default Header;