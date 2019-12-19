import React, {Component} from 'react';
import Card from './Card.js';
import pic1 from "./pic/isberg1.gif";
import pic2 from "./pic/isberg2.gif"
import pic3 from "./pic/isberg3.png";
import pic4 from "./pic/rainiceberg.gif";
import pic5 from "./pic/isberg5.png";
import pic6 from "./pic/sol3.gif";
import axios from 'axios'; 
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

class TimeAxis extends Component {

  state = {
    firstMass: 0,
    firstTemp: 0,
    firstFuel: 0,
    firstYear: 1945,
    secondMass: 0,
    secondTemp: 0,
    secondFuel: 0,
    secondYear: 1960,
    thirdMass: 0,
    thirdtemp: 0,
    thirdFuel: 0,
    thirdYear: 1971,
    fourthMass: 0,
    fourthTemp: 0,
    fourthFuel: 0,
    fourthYear: 1980,
    fifthMass: 0,
    fifthTemp: 0,
    fifthFuel: 0,
    fifthYear: 1990,
    sixthMass: 0,
    sixthTemp: 0,
    sixthFuel: 0,
    sixthYear: 2014,
  }

  
    callApi = async () => {
  
      const responseGlacier = await(axios.get('https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0'));
      responseGlacier.data.map((instanceGlac) => {
        switch(instanceGlac.Year) {

          case 1945:
            this.setState({
              firstMass: instanceGlac['Mean cumulative mass balance']
            });
            break;
         
          case 1960:
            this.setState({
              secondMass: instanceGlac['Mean cumulative mass balance']
            });
            break;

          case 1971:
            this.setState({
              thirdMass: instanceGlac['Mean cumulative mass balance']
            });
            break;

          case 1980:
            this.setState({
              fourthMass: instanceGlac['Mean cumulative mass balance']
            });
            break;

          case 1990:
            this.setState({
              fifthMass: instanceGlac['Mean cumulative mass balance']
            });
            break;

          case 2014:
            this.setState({
              sixthMass: instanceGlac['Mean cumulative mass balance']
            });
            break;

          default:
            break;
        }
        return 1;
      });
    
      const responseFuel = await(axios.get('https://my.api.mockaroo.com/co2.json?key=8eb9e6f0')); 
      responseFuel.data.map((instanceFuel) => {
        
         switch (instanceFuel.Year) {
          case 1945:
            this.setState({
              firstFuel: instanceFuel['Total']
            });
              break;
          
          case 1960:
            this.setState({
              secondFuel: instanceFuel['Total']
            });
              break;

          case 1971:
            this.setState({
              thirdFuel: instanceFuel['Total']
            });
              break;

          case 1980:
            this.setState({
              fourthFuel: instanceFuel['Total']
            });
              break;

          case 1990:
            this.setState({
              fifthFuel: instanceFuel['Total']
            });
              break;

          case 2014:
            this.setState({
              sixthFuel: instanceFuel['Total']
            });
              break;

            default:
              break;
         }
         return 1;
      });
    
      const responseTemp = await(axios.get('https://my.api.mockaroo.com/temp.json?key=8eb9e6f0')); 
      responseTemp.data.map((instanceTemp) => {

          switch (instanceTemp.Year) {
            case 1945:
              this.setState({
                firstTemp: instanceTemp['Mean']
              });
              break;

            case 1960:
              this.setState({
                secondTemp: instanceTemp['Mean']
              });
              break;  

            case 1971:
              this.setState({
                thirdTemp: instanceTemp['Mean']
              });
              break;

            case 1980:
              this.setState({
                fourthTemp: instanceTemp['Mean']
              });
              break;

            case 1990:
              this.setState({
                fifthTemp: instanceTemp['Mean']
              });
              break;

            case 2014:
              this.setState({
                sixthTemp: instanceTemp['Mean']
              });
              break;

            default:
              break;
          }
          return 1;
      });
return 1;
    }
    
    componentDidMount() {
      this.callApi(); 
    }

render(props) {
  const Container = styled.div`
  text-align:center;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 900px;
`;

//color: #9fb6c6;  
//text-shadow: 0.5px 0.5px 0.5px #000000;
const Arrow = styled.div`
  opacity: 20%; 
  z-index: 100;
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  padding: 3%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;

const CarouselUI = ({ position, handleClick, children, }) => (
  <Container>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);
    

  return (
    <div className="bigBox">
      <div className="container">
        <h5 className="card-title">What's the difference between now, then and the future?</h5>
          <p className="timeAxisP">Do you know what <b>global warming</b> means? I know you've heard this word before but do you know what it’s doing to the world right now, and what will happen if we let it continue?</p>
              
            <Carousel maxTurns={0}>
              <Slide right>
                <div className="card-deck" data-interval="false !important">
                  <Card year={this.state.firstYear} temp={this.state.firstTemp} mass={this.state.firstMass} fuel={this.state.firstFuel} img={pic1} header="Give me more" text="The second world war ended and people could finally start buying more and more stuff. Makeup and fashionable clothes was on everyone’s wish list. Mass producing starts, and uses the earth's resources." />
                  <Card year={this.state.secondYear} temp={this.state.secondTemp} mass={this.state.secondMass} fuel={this.state.secondFuel} img={pic2} header="Tweed it is" text="This was the time of mini skirts, summer of love and let’s not forget Twiggy. We also started wearing tweed. Everyone needed it in their wardrobe to prove their fashion sense, so factories started a mass produce." />
                  <Card year={this.state.thirdYear} temp={this.state.thirdTemp} mass={this.state.thirdMass} fuel={this.state.thirdFuel} img={pic3} header="Big hair don't care" text="The year is 1971 and Charlie's Angels is airing. Everyone loves Farah Foster and wants that perfect hair. For that you needed a whole bottle of hairspray. The hairspray was made with chemicals that affected the ozone layer." />               
                </div>
              </Slide>

              <Slide right>
                <div className="card-deck" data-interval="false !important">
                  <Card year={this.state.fourthYear} temp={this.state.fourthTemp} mass={this.state.fourthMass} fuel={this.state.fourthFuel} img={pic4} header="Mother earth i'm sorry" text="A lot of people wants to forget about the shoulder pads, big hair and the makeup. But this decade is also one mother earth even wants to forget about due to the lack of knowledge about recycling." />
                  <Card year={this.state.fifthYear} temp={this.state.fifthTemp} mass={this.state.fifthMass} fuel={this.state.fifthFuel} img={pic5} header="Driving in my car" text="We learned about the pollution problems in LA. Every car was cruising down the road listening to Roxette’s hit song “It must have been love”. Not knowing what our cars was releasing into the earth's atmosphere." />
                  <Card year={this.state.sixthYear} temp={this.state.sixthTemp} mass={this.state.sixthMass} fuel={this.state.sixthFuel} img={pic6} header="Me and my smartphone" text="Smartphones became more computer like instead of a thing to call or text on. Companies offered more stuff, this through a smartphone. One being cheap flights, making everyone start to explore the world." />                              
                </div>
              </Slide>

            </Carousel>
        </div>
    </div>     
    
  );
}
}

export default TimeAxis;