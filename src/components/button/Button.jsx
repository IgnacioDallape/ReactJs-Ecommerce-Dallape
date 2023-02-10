import React from 'react'

const Boton    = (props) => {
  return (
    <button 
    style={ props.buttonCondition ? {color:'red', backgroundColor: 'white', borderRadius: '0.5rem', border: 'solid red 2px', padding : '0.5rem'} : {color:'white', backgroundColor: 'black', borderRadius: '0.5rem', border: 'solid white 2px', padding : '0.5rem'}}> {props.buttonName} 
    </button>
    
    )
}

export default Boton