import React from 'react'

function TopButtons() {

  const cities  = [
    {
      id : 1,
      title: "London",
    },

    {
      id : 2,
      title: "Mumbai",
    },

    {
      id : 3,
      title: "Delhi",
    },

    
    {
      id : 4,
      title: "Sydney",
    },
    
    {
      id : 5,
      title: "Newyork",
    },

  ]



  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map( (city) => {
        return(
        <button key={city.id} className='text-white text-lg font-medium' type="">{city.title}</button>
        
        )

      })} 
    </div>
  )
}

export default TopButtons