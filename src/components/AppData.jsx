import React from 'react'
import Lista_productos from './Container'


const AppData = () => {
    const data = [
        {id: 1, name: 'Remeras'},
        {id: 2, name: 'Jeans'},
        {id: 3, name: 'Zapatillas'}
    ]
    

return (
        <Lista_productos data={data}/>
)
}

export default AppData