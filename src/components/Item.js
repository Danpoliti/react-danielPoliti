import React, {useContext, useState} from 'react'
import CartContext from 'contexts/cart'


const Item = ({data: {id, name, cost}}) => {
    const {data, updater} = useContext(CartContext)


    return (
        <li><b>{name}</b> {useMoney(cost)}{` `}
        <button onClick={() => updater(id)}>Add to Cart</button>
        </li>
    )
}

export default Item