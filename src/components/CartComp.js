import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import UserContext from 'contexts/user'


 
 
const CartComp = ({data}) => {

  
    const { id, name, category, regularPrice, price, details, img, color, cart, fav, type } = data
  
  const prodCartView = useContext(UserContext)
  const addCart = prodCartView.addCart
  console.log(addCart)
 
  return (
    <>
<section className="checkout-results">


      <article className="checkout-product">

        <header className="checkout-product-header">

        <h3 className="checkout-h3">{name} - {color}</h3>
          <data value="179" className="product-price"><del>{regularPrice}</del><br /><ins>{price}</ins>
          </data>
          <div className="product-rating">
            <h4>Rating</h4>
            <span className="material-icons">star</span><span className="material-icons">star</span><span
              className="material-icons">star</span><span className="material-icons">star</span><span
                className="material-icons">star_half</span>
				<h4>Quantity</h4>
				<span className="checkout-quantity">x</span><span className="checkout-quantity">1</span>
          </div>


        </header>
      </article>
    </section>

    </>
  )
}

export default CartComp