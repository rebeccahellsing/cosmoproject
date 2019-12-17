import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import GlobalMenu from "./components/GlobalMenu.js";
import HomePage from "./components/HomePage.js";
import TimeAxis from "./components/TimeAxis.js";
import './custom.css';
import './App.css'; //Graf Css 
import Chart from './components/Chart.js'; 
import axios from 'axios'; 
import 'rc-slider/assets/index.css';

class App extends React.Component {

  state = {
    data: [],
    min: 1940,
    max: 2014,
    curMin: 0,
    curMax: 2014,
  }


onSubmit = async () => {
  
  const response = await(axios.get('https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0'))
  this.setState({
    data: response.data
  }); 
}

componentDidMount() {
  this.onSubmit();
}

onValueChange = (event) => {
  this.setState({
    curMin: event[0],
    curMax: event[1]
  });
}

onClickScroll = (event) => {
  window.scrollTo(0, 0)
}


render () {
  return (
    <div className="App">
       <span id='scrolltxt' onClick={this.onClickScroll}>⌃</span>
      <GlobalMenu />
      <Header />
      <TimeAxis data={this.state.data}/>
      <HomePage />
      
      <Chart 
        data={this.state.data} 
        min={this.state.curMin} 
        max={this.state.curMax} 
        submit={this.onSubmit} 
        onValueChange={this.onValueChange}
      />
    
    
      <Footer />
    </div>
  );
  }
}

export default App;
