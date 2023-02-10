import React from 'react'

const CarWidgetNumber = (props) => {


  return (
    <div className='bg-light' style={{position: 'relative', top: '2px', left:'5px'}}>
        {props.number}
    </div>
  )
}

export default CarWidgetNumber