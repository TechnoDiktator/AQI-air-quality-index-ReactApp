/*

Congratulation, your registration already validated.

Your token is de1a2fc2dd32435bcc68c8ef3f1b1d4bbc06a999


https://api.waqi.info/feed/mumbai/?token=de1a2fc2dd32435bcc68c8ef3f1b1d4bbc06a999


You can now try, for instance, to get the beijing feed using:
https://api.waqi.info/feed/here/?token=de1a2fc2dd32435bcc68c8ef3f1b1d4bbc06a999
And you will get this result:

*/



const getAQIData = (city) => {
    let data
    const baseUrl = `https://api.waqi.info/feed/${city}/?token=de1a2fc2dd32435bcc68c8ef3f1b1d4bbc06a999`
    const url = new URL(baseUrl)
    console.log(url)
    return data =  fetch(url)
            .then((res)=>res.json())
            .then((data) => data)

}


// const formatData =(data) =>{
//     const {
//         data : {aqi , idx} ,
//     } = data
//     return {aqi , idx}
// }

// const getformatteddata= async (city)=>{
//     const data = await getAQIData(city).then(formatData)
//     return formatData(data)
// }



export default getAQIData