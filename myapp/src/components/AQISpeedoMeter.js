import ReactSpeedometer from "react-d3-speedometer";


import React from 'react'

function AQISpeedoMeter() {
  return (
    <div>
        <ReactSpeedometer minValue={0} maxValue={500} width={500} needleColor="#dcff2f"></ReactSpeedometer>
    </div>
  )
}

export default AQISpeedoMeter