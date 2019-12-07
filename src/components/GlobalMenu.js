import React, {Component} from 'react';
import logo from "../logotype.png";



class GlobalMenu extends Component {
render() {
  return (
    <div>  
        <nav>
            
            <ul className="nav justify-content-center">
                <img src={logo} className="logo" ></img>
                <li className="nav-item" >
                    <a className="nav-link active" href="#" >style</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">beauty</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">sex</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">politics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">astrology</a>
                </li>

                
                
            </ul>
        </nav>
       
    </div>
  );
}
}

export default GlobalMenu;