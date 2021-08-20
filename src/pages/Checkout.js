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

  const sumCart = [0]
  productsCart.forEach(prod => sumCart.push(prod.price));


 const totalCart = sumCart.reduce(sumPrice);

 function sumPrice(total, num) {
  return total + num;
 }

 


  return (
    <Layout>
    <header>
    <h3><Link to={`/`}>BACK TO RESULT PAGE</Link></h3>
{/* {(addCart.length === 0) ? (<h2>No products to display, go back to shopping page.</h2>) : */}
        {cartProd}
    </header>
</Layout>
  
   
  
  )

}


export default Cartpage