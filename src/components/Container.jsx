import React from 'react'

const Container = (props) => {
  return (
    <Child data = {props.data} />
  )
}



const Child = (props) => {
  return (
<>
    

    <a href="" style={{textDecoration : 'none', color : 'black'}}>
        {props.data.map(item => (
            <li key = {item.id} style={{paddingLeft: '2rem'}}> 
                {item.name} 
            </li>
        ))}
    </a>
        </>
  )
}



export default Container