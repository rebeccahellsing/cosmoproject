import React, {Component} from 'react';
import Card from './Card.js';
import pic from "./pic/icebergN1.png";
import pic2 from "./pic/icebergN222.png"
import pic3 from "./pic/iceberg33.png";
import axios from 'axios'; 


class TimeAxis extends Component {

  state = {
    firstMass: 0,
    firstTemp: 0,
    firstFuel: 0,
    firstYear: 1945,
    secondMass: 0,
    secondTemp: 0,
    secondFuel: 0,
    secondYear: 1971,
    thirdMass: 0,
    thirdtemp: 0,
    thirdFuel: 0,
    thirdYear: 2014
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
          
          case 1971:
            this.setState({
              secondMass: instanceGlac['Mean cumulative mass balance']
            });
            break;

          case 2014:
              this.setState({
                thirdMass: instanceGlac['Mean cumulative mass balance']
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

          case 1971:
            this.setState({
              secondFuel: instanceFuel['Total']
          });
            break;

          case 2014:
            this.setState({
              thirdFuel: instanceFuel['Total']
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

            case 1971:
                this.setState({
                    secondTemp: instanceTemp['Mean']
                });
              break;

            case 2014:
                this.setState({
                    thirdTemp: instanceTemp['Mean']
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

render() {
  return (
    <div className="bigBox">
        <div className="container">
            <h5 className="card-title">What's the difference between now, then and the future?</h5>
            <p className="timeAxisP">Do you know what <b>global warming</b> means? I know you've heard this word before but do you know what it’s doing to the world right now, and what will happen if we let it continue?</p>
            <div className="card-deck">
                    <Card year={this.state.firstYear} temp={this.state.firstTemp} mass={this.state.firstMass} fuel={this.state.firstFuel} img={pic} text="This year the second world war ended and people could finally start buying more and more stuff. Makeup and fashionable clothes was on everyone’s wish list. Mass producing starts, and uses the earth's resources."/>
                    <Card year={this.state.secondYear} temp={this.state.secondTemp} mass={this.state.secondMass} fuel={this.state.secondFuel} img={pic2} text="Everyone loves Farah Foster and wants that perfect hair. For that you needed a whole bottle of hairspray. The hairspray was made with chemicals that affected the ozone layer."/>
                    <Card year={this.state.thirdYear} temp={this.state.thirdTemp} mass={this.state.thirdMass} fuel={this.state.thirdFuel} img={pic3} text="Smartphones became more computer like instead of a thing to call or text on. Companies offered more stuff, this through a smartphone. One being cheap flights, making everyone start to explore the world."/>
                
            </div>
        </div>
    </div>     
    
  );
}
}

export default TimeAxis;