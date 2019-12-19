
import React from 'react';
import {
    AreaChart, /*LineChart,*/ Area, /*Line,*/ XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import '../App.css';
import { Range } from 'rc-slider';
import fblogo from "./pic/icons/facebook-logo.png";
import twlogo from "./pic/icons/twitter.png";
import pinlogo from "./pic/icons/pinterest.png";
import pinSharePic from "./pic/pinterestShare.png";
import {
    FacebookShareButton,
    TwitterShareButton,
    PinterestShareButton,
  } from 'react-share';

//Functional Component 
const Chart = (props) => {
    
    const data = [
        {year: 1940, /*GMSL:-12, GMSLPos:-10, GMSLNeg:-14*/}
    ];
    
props.data.map( (seaLevel) => { //map ≈ for each. Each object iterated in the data array is called a "seaLevel"
    let concStr = parseInt(seaLevel.Time.substring(0, 4)); // sets year to 1990 format instead of 1990-03-15 and converts to number (from string)
    if (concStr+1 > props.min && concStr-1 < props.max && concStr < 2015 && concStr > 1939) { //calculates min and max value based on information sent from slider (from App.js)
        const neg = Math.round(seaLevel.GMSL - seaLevel['GMSL uncertainty']); //sets negativ uncertainty from GMSL value - uncertainty
        const pos = Math.round(seaLevel.GMSL + seaLevel['GMSL uncertainty']); //sets positive uncertainty from GMSL value + uncertainty
                    // also the genious who came up with the idea of including a "space" in their api is to be commended!
            {data.push( { //pushes the selected data into the const data declared at line 10
                year: concStr,
                'Global average sea level (GMSL)': Math.round(seaLevel.GMSL),
                GMSLUncertain: seaLevel['GMSL uncertainty'],
                'Positive difference of GMSL': pos,
                'Negative difference of GMSL': neg
            } )}
    }
    return data; // unsure if this does anything but react got sad at one point where I did'nt include a return...
});


    return(
        <div className="graph">
        <h5 className="card-title-graph">Waterlevels now and then</h5>
        <p className="chartP">Here you can see how global warming, pollutions and people have affected the ice caps by making them melt and therefore increasing the sea levels all around the world. </p>

                              <p className="chartP slidingtxt"><i>By sliding the applicator you can see how the levels have changed from 1945-2014.</i></p>
         <p className="descriptionCentimeter">Millimeter</p>

            <AreaChart //LineChart uses Lines || AreaChart uses Area
            width={800}
            height={600}
            data={data} 
            >
        <CartesianGrid strokeDasharray="3 3" />
       
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Global average sea level (GMSL)" stackId="2" stroke="#000" fill="#000" activeDot={{ r: 8 }} opacity={0.5} /> 
        <Area type="monotone" dataKey="Positive difference of GMSL" stackId="1" stroke="#b4e2f0" fill="#b4e2f0" />
        <Area type="monotone" dataKey="Negative difference of GMSL" stackId="3" stroke="#b4e2f0" fill="#b4e2f0" />
      </AreaChart> 

      <p className="descriptionYear">Year</p>

        <div id="slider">
        <Range 
            min={1940} 
            max={2014} 
            onChange={props.onValueChange} 
            defaultValue={[1990, 2000]}
        /><p className="slider-text">Try It!</p>
        </div>

            <div className="socialmediaShareBox">
            <p className="headingSocialmedia">Share on social media!</p>
                <FacebookShareButton
                    url='https://rebeccahellsing.github.io/cosmoproject/'
                    title=''
                    quote='Cosmopolitan enviroment'
                    className="Demo__some-network__share-button">
                        <img src={fblogo} className="SocialmediaShare" alt="Sociala media facebooklogotype"></img>
                </FacebookShareButton>
                
                <TwitterShareButton
                    url='https://rebeccahellsing.github.io/cosmoproject/'
                    title=''
                    quote='Cosmopolitan enviroment'
                    className="Demo__some-network__share-button">
                        <img src={twlogo} className="SocialmediaShare" alt="Sociala media twitterlogotype"></img>
                </TwitterShareButton>

                <PinterestShareButton
                    url='https://rebeccahellsing.github.io/cosmoproject/'
                    title=''
                    quote='Cosmopolitan enviroment'
                    media= {pinSharePic}
                    className="Demo__some-network__share-button">
                        <img src={pinlogo} className="SocialmediaShare" alt="Sociala media twitterlogotype"></img>
                </PinterestShareButton>
            </div>    

        </div>
    ); // The Line || Area above must match the chart ie. either LineChart for Line or AreaChart for Area
}

export default Chart;
