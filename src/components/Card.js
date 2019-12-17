import React from 'react'; 

class Card extends React.Component {

    state = {
        counter: 0,
        none: "",
        hnone: '',
        header: this.props.header,
        text: this.props.text
    }

    onClickShowText = (event) => {
        if (this.state.counter === 0) {  
          this.setState({
            none: this.state.text,
            hnone: this.state.header,
            counter:1
          });
        } else {
          this.setState({
            none: "",
            hnone: '',
            counter: 0
          });
        }
      }

    render (){
    return (
      <div className="card">
        <img src= {this.props.img} className="card-img-top" alt="..."></img>
        <div className="card-body">
        <h5 className="card-title-img">{this.props.year}</h5>
        <div className="card-api">{this.props.temp}°C 
        </div> 
        <p className="card-api-desc">Global Temperature</p> 
        <p className="card-api">{this.props.mass}</p> 
        <p className="card-api-desc">Averege Mass of Glacier</p>
        <p className="card-api">{this.props.fuel}</p> 
        <p className="card-api-desc">Total Carbon Emissions From Fossil Fuels</p>
        <button className="descIceMelting" onClick={this.onClickShowText}><span>+</span></button>
        <div className="timeCardDesc"><h3>{this.state.hnone}</h3> <p>{this.state.none}</p></div>
        </div>
      </div>
      
    ); 
    }
}

export default Card; 