import React, {Component} from 'react';
import tallpic from "./pic/tallpic4.gif";
import pic from "./pic/micropeel.jpg";
import num1 from "./pic/num1.jpg";
import num2 from "./pic/num2.jpg";
import num3 from "./pic/num3.gif";





class HomePage extends Component {
render() {
  return (
   <div className="container">
        <div className="mediaBox">
            <div className="media">
                <img src={pic} className="ml-3 pic1" alt="a woman washing her face with a peeling mask"/>
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
                <span className="coolTitle title-2">
                <h4 className="mt-0">Why clothes hurt our lovely planet</h4>
                </span>
                    <div className="texter">
                    <p className="article1-text">Is your dream to have a Kim K’s wardrobe? We're sorry, but we have to tell you something. 
                    The fashion industry is crazy enough the second largest polluter after the oil industry. It actually releases double the amount of greenhouse gases compared to flying. </p>
                    <p className="article1-text">It takes a lot, like A LOT, of water to produce materials. 100 000 gallons of water to produce a pair of jeans. But the most scary thing is the amount of toxic fumes being released when dying clothes.</p>
                </div>
                </div>
                </div>
                <img src={tallpic} className="ml-3 pic2" alt="a woman" />
            </div>
            <div className="media">
                <div className="media-body media-body-last">
                <span className="coolTitle">
                    <h4 className="mt-0 h4-last">Who saves the world? GIRLS!</h4>
                    </span>
                    <p className="article1-text p-last">Now that you know a bit more about how we hurt our environment you may ask, but what can I do? </p>
                    <p className="p-last">Well, we know change can be tuff, but we’re not going to ask you to change anything drastic. Although, everyone can do something and we’re going to give you three small tips!</p>
                </div>
            </div>
        
            <div className="card"> 
                <div className="card-group tips-group">
                    <div className="card tips-tricks">
                        <img src={num1} className="card-img-top tips-pics-fixs" alt="ingredients for a face mask "></img>
                        <div className="card-body tips-body">
                            <span className="coolTitle tips-1">
                                <h5 className="tips-tricks-h5-1">DIY Strawberry Scrub</h5>
                            </span>
                            <p className="tips-pics-text">Few ingredients, simple to make and lovely to use. Your skin will love it and so will the environment!</p>
                            <a href="https://www.cosmopolitan.com/" className="receipe-link">See Recipe here</a>
                        </div>
                    </div>
                    <div className="card tips-tricks">
                        <img src={num2} className="card-img-top tips-pics-fixs" alt="clothes hanging to dry"></img>
                        <div className="card-body tips-body">
                            <span className="coolTitle tips-2">
                                <h5 className="tips-tricks-h5-2">Does it really need a wash?</h5>
                            </span>
                            <p className="tips-pics-text">Wash less and weather your clothes instead. It’s good for the environment and your clothes will last longer. </p>

                        </div>
                    </div>
                    <div className="card tips-tricks">
                        <img src={num3} className="card-img-top tips-pics-fixs num-3" alt="a woman looking at a garment"></img>
                        <div className="card-body tips-body">
                            <span className="coolTitle tips-3">
                                <h5 className="tips-tricks-h5-3">Look for hidden diamonds!</h5>
                            </span>
                            <p className="tips-pics-text">Take a search in your closet, you will always find something you forgot yet love!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
   </div> //slut på container
  );
}
}

export default HomePage;