import React from 'react'

const ItemListContainer = (props) => {
  return (
    <>
        <div class="alert alert-warning" role="alert">
            {props.greeting} 
        </div>
    </>
  )
}

export default ItemListContainer