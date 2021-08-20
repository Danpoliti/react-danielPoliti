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
  const cartqnt = cartProd.length
 
 
  return (
    <Layout>
    <header className="checkout-header">
    <h3><Link to={`/`}>BACK TO RESULT PAGE</Link></h3>
        {cartProd}
        <div className="checkout-product">

        <div className="total-checkout-product-header">
          <h1 className="total-h3">TOTAL</h1>
          <div className="total-qnt-h3">
        <h3>Quantity</h3>
        <h3>x {cartqnt}</h3>
          </div>
          <div className="total-cost-h3">
          <h3>Cost</h3>
        <h3>$ {cartqnt}</h3>

          </div>
        </div>
        </div>
        <button className="checkout-button" >CHECKOUT</button>
    </header>
</Layout>
  
   
  
  )

}


export default Cartpage