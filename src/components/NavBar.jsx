import { Button } from 'bootstrap'
import React from 'react'
import CarWidget from '../car-widget/CarWidget'
import CarWidgetNumber from '../car-widget/CarWidgetNumber'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Boton from './button/Button'
const NavBar = () => {

  const [carrito] = ([3]);


  return (
    <>
      

    


    <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
    <CarWidget/>
    <CarWidgetNumber  number={3} />
      <div class="container">
        <a style={{color : 'white'}} class="navbar-brand" href="#" >MENDOCLOTHES</a>
        <Boton buttonName = 'INICIO' />
        <Boton buttonName = 'REMERAS' />
        <Boton buttonName = 'JEANS' />
        <Boton buttonName = 'AYUDA' buttonCondition  = {true}/>
      </div>
    </nav>


    
    
    </>
  )
}

export default NavBar