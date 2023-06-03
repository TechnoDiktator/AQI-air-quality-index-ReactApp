import React from 'react'
import {UilSearch , UilLocationPoint} from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className='flex flex-row justify-center my-6'>
        
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input placeholder='search any city....' type="text" className='text-x1 font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' name="" value=""/>
        </div>
        <UilSearch size={25} className =  " text-white cursor-pointer transition ease-out  hover:scale-125  ml-4"  ></UilSearch>
        <UilLocationPoint  size={25} className = " text-white cursor-pointer transition ease-out hover:scale-125 ml-4"></UilLocationPoint>

        <div className=' flex flex-row w-1/4 items-center justify-center'>
             <button name ="metric"   className=' text-white text-xl font-light '  type="">C</button>
             <p className='text-xl text-white mx-1'> {"  "}|{"  "}</p>
             <button name = "imperial" className='text-white text-xl font-light' type="">F</button>
        </div>


    </div>
  )
}

export default Inputs