import logo from './logo.svg';
import './App.css';
import React from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import AqiAndDetails from './components/AqiAndDetails';
import Forecast from './components/Forecast';
import ReactSpeedometer from 'react-d3-speedometer';

import AQISpeedoMeter from './components/AQISpeedoMeter';
import getformatteddata from './services/AQIService';
import getAQIData from './services/AQIService';


/*

Congratulation, your registration already validated.

Your token is de1a2fc2dd32435bcc68c8ef3f1b1d4bbc06a999


https://api.waqi.info/feed/mumbai/?token=de1a2fc2dd32435bcc68c8ef3f1b1d4bbc06a999


You can now try, for instance, to get the beijing feed using:
https://api.waqi.info/feed/here/?token=de1a2fc2dd32435bcc68c8ef3f1b1d4bbc06a999
And you will get this result:

*/




function App() {

  const fetchAir = async (city) => {
    const data  = getAQIData(city)
    console.log(data)
    console.log(data.idx)


  }


  fetchAir("mumbai")


  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-black to-red-500 h-fit shadow-xl shadow-gray-400'>
      <TopButtons></TopButtons>
      <Inputs></Inputs>
      <TimeAndLocation></TimeAndLocation>
      <AQISpeedoMeter></AQISpeedoMeter>
      <AqiAndDetails></AqiAndDetails>
      <Forecast title = "hourly forecast"/>
      <Forecast title = "daily forecast"/>
    </div>
  );
}

export default App;


