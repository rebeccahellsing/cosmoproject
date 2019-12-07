import React, {Component} from 'react';
import tallpic from "../tallpic4.gif";
import pic from "../micropeel.jpg";
import num1 from "./num1.jpg";





class HomePage extends Component {
render() {
  return (
   <div className="container">
   
   <div className="mediaBox">
        <div className="media">
            <img src={pic} className="ml-3 pic1" alt="..."/>
            <div className="media-body">
                    <span className="coolTitle">
                    <h4 className="mt-0">Your peeling routine kills the poor fishes</h4>
                    </span>
                    <div className="texter">
                    <p className="article1-text">Did you know there’s a big chance your peeling cream contains microplastic? That after the peeling has done its job on your beautiful face and you wash it off the plastic ends up in our sea and lakes.</p>
                    <p className="article1-text">The plastic gather toxins and end up in the poor fishes stomachs’s. I bet this wasn’t something you were thinking of when trying to keep your skin looking flawless and glowing. </p>
                    
                    </div>
            </div>
        </div>
        <div className="media">
            <div className="media-body">
            <div className="content-in-media">
            <span className="coolTitle">
            <h4 className="mt-0">Why clothes hurt our lovely planet</h4>
            </span>
                <div className="texter">
                <p className="article1-text">Is your dream to have a Kim K’s wardrobe? We're sorry, but we have to tell you something. 
                The fashion industry is crazy enough the second largest polluter after the oil industry. It actually releases double the amount of greenhouse gases compared to flying. </p>
                <p className="article1-text">It takes a lot, like A LOT, of water to produce materials. 100 000 gallons of water to produce a pair of jeans. But the most scary thing is the amount of toxic fumes being released when dying clothes.</p>
            </div>
            </div>
            </div>
            <img src={tallpic} className="ml-3 pic2" alt="..." />
        </div>


        <div className="media">
            <div className="media-body media-body-last">
            <span className="coolTitle">
                <h4 className="mt-0 h4-last">Who saves the world? GIRLS!</h4>
                </span>
                <p className="article1-text p-last">Now that you know, what can we do to prevent our habits from destroying our planet? We know change can be hard, but we’re not going to ask you to change anything drastic, but we all have to do something.</p>
                
                
            </div>
            
        </div>
        <div className="tips-pics">
                <img src={num1} className="tips-pics-fixs" alt="..."></img>
                <img src={num1} className="tips-pics-fixs" alt="..."></img>
                <img src={num1} className="tips-pics-fixs tips-pic-3" alt="..."></img>
                </div>
    </div>
    

    
   
   
       
        
    
   
   </div>
  );
}
}

export default HomePage;