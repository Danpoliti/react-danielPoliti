import React, {useContext, useState} from 'react'
import CartContext from 'contexts/cart'
import ProductsContext from 'contexts/products'


const Checkout = () => {

    const cart = useContext(CartContext).data
    const products = useContext(ProductsContext).data
    let subtotal = 0

    return (
        <>
        <h2>Checkout</h2>
        <ul>
            {
                (cart.length)
                ? cart.map(p => {
                    let {name, cost} = products.find(prod => prod.id === p.id)
                    subtotal += cost * p.count
                    return <li key={p.id}><b>{name}</b> ({p.count} x {useMoney(cost)}) <b>{useMoney(cost * p.count)}</b></li>
                })
                : (<div>No items in your cart, try going to the <Link to="/">SHOPPING PAGE</Link></div>)
            }
        </ul>
        <footer>
            {Boolean(cart.length) && <div><em>(this does not do anything)</em><button> Check Out {useMoney(subtotal)}</button></div>}
        </footer>
        </>
    )
}

export default Checkout