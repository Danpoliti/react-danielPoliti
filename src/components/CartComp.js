import React, { useContext, useState } from 'react'
import UserContext from 'contexts/user'
import Image from './Image'



const CartComp = ({ data }) => {


  const { id, name, category, regularPrice, price, details, img, color, cart, fav, type } = data

  const cartItem = useContext(UserContext)
  const DeletefromCart = cartItem.DeletefromCart

  return (
    <>
      <section className="checkout-results">


        <article className="checkout-product">

          <header className="checkout-product-header">
            <Image src={img[0]} alt="Product Image" className="product-img" id="bigimage" />
            <h3 className="checkout-h3">{name} - {color}</h3>
            <data value="179" className="product-price"><del>${regularPrice}</del><br /><ins>${price}.00</ins>
            </data>
            <div className="product-rating">
              <h4>Rating</h4>
              <span className="material-icons">star</span><span className="material-icons">star</span><span
                className="material-icons">star</span><span className="material-icons">star</span><span
                  className="material-icons">star_half</span>
            </div>
            <div className="checkout-quantity">

              <h4>Quantity</h4>
              <span>x  1</span>
              <button className="button-remove" onClick={(event) => DeletefromCart(event, id)}>remove</button>
            </div>


          </header>
        </article>
      </section>

    </>
  )
}

export default CartComp