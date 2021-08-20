import React, {useContext, useState} from 'react'
import CartComp from 'components/CartComp'
import {Link} from 'react-router-dom'
import UserContext from 'contexts/user'
import Layout from 'components/Layout'



 
 
const Cartpage = () => {

  const cartProduct = useContext(UserContext)
  const productsCart = cartProduct.addCart
  const [addCart, setAddCart] = useState([])

 
  const cartProd = productsCart.map(prod => <CartComp key={prod.id} data={prod} />)

 

  return (
    <Layout>
    <header className="checkout-header">
    <h3><Link to={`/`}>BACK TO RESULT PAGE</Link></h3>
{/* {(addCart.length === 0) ? (<h2>No products to display, go back to shopping page.</h2>) : */}
        {cartProd}
        <button className="checkout-button" >CHECKOUT</button>
    </header>
</Layout>
  
   
  
  )

}


export default Cartpage