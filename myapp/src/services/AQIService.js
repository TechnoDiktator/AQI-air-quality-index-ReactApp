/*
Congratulation, your registration already validated.

Your token is de1a2fc2dd32435bcc68c8ef3f1b1d4bbc06a999

https://api.waqi.info/feed/mumbai/?token=de1a2fc2dd32435bcc68c8ef3f1b1d4bbc06a999

You can now try, for instance, to get the beijing feed using:
https://api.waqi.info/feed/here/?token=de1a2fc2dd32435bcc68c8ef3f1b1d4bbc06a999
And you will get this result:
*/

import { DateTime } from "luxon"

const getAQIData = (city) => {
    console.log(city)
    let citydata
    const baseUrl = `https://api.waqi.info/feed/${city}/?token=de1a2fc2dd32435bcc68c8ef3f1b1d4bbc06a999`
    console.log(baseUrl)
    
    const url = new URL(baseUrl)
    console.log(url)
    return citydata =  fetch(url)
            .then((res)=>res.json())
            .then((data) => data)

}

const formatData =(data) =>{
    const {
        data : {aqi , idx  , attributions , city , dominentpol  , iaqi , time , forecast   } ,
        

    } = data
    return {aqi , idx , attributions , city , dominentpol , iaqi , time , forecast}
}

const getformatteddata= async (city)=>{
    const data = await getAQIData(city).then(formatData)
    return data
}

const formatToLocalTime = (secs , zone ,format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a" )=>{
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
}

export default getformatteddata