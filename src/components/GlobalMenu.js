import React, {Component} from 'react';
import logo from "./pic/logotype.png";



class GlobalMenu extends Component {
render() {
  return (
    <div>  
        <nav>
            
            <ul className="nav justify-content-center">
                <img src={logo} className="logo"  alt="logotype"></img>
                <li className="nav-item" >
                    <a className="nav-link active" href="https://www.cosmopolitan.com/" alt="menu style">style</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.cosmopolitan.com/"  alt="menu beauty">beauty</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.cosmopolitan.com/"  alt="menu sex">sex</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.cosmopolitan.com/" alt="menu politics">politics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.cosmopolitan.com/"  alt="menu astrology">astrology</a>
                </li>

                
                
            </ul>
        </nav>
       
    </div>
  );
}
}

export default GlobalMenu;