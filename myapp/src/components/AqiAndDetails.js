import React from 'react'
import {UilArrowUp ,UilArrowDown , UilTemperature , UilTear , UilWind , UilSun , UilSunset  , UilLocationPoint} from '@iconscout/react-unicons'



function AqiAndDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-400'>
            <p>Cloudu with a chance of meatballs</p>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img className='w-20' src="http://openweathermap.org/img/wn/01d@2x.png" alt=""/>
        

            <p className='text-5xl'>134</p>
            <div className = "flex flex-col space-y-2">
                
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size = {18} className = "mr-1" />
                    Real Feel:
                    <span className='font-medium ml-1'>32</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size = {18} className = "mr-1" />
                    Humidity:
                    <span className='font-medium ml-1'>32</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size = {18} className = "mr-1" />
                    WindSpeed:
                    <span className='font-medium ml-1'>12 kmph</span>
                </div>
            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun/>
            <p className='font-light'>
                Rise: <span className='font-medium ml-1'>06 : 45 AM</span>
            </p>
            <p className='"font-light'>|</p>

            <UilSunset/>
            <p className='font-light'>
                Set: <span className='font-medium ml-1'>07 : 45 PM</span>
            </p>
            <p className='"font-light'>|</p>

            <UilSun/>
            <p className='font-light'>
                High: <span className='font-medium ml-1'>06 : 45 C</span>
            </p>
            <p className='"font-light'>|</p>

            <UilSun/>
            <p className='font-light'>
                Low: <span className='font-medium ml-1'>06 : 28 C</span>
            </p>
            <p className='"font-light'>|</p>
        </div>

    </div>

  )
}

export default AqiAndDetails