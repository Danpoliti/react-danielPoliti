import React from 'react'
import Image from './Image.js'
// import noImg from 'img/student.png'

const ProductRow = ({data}) => {
    const {id, name, category, regularPrice, price, details , img, color, type } = data

    console.log("Image file:---", img[0])

    return (
        <section className="results">


        <article className="product">
<div className="product-grid">
                <Image src={img[0]} alt="Product Image" className="product-img" id="bigimage" />
                <Image src={img[1]} alt="Product Image" className="thumb-img" />
                <Image src={img[2]} alt="Product Image" className="thumb2-img" />
                <Image src={img[3]} alt="Product Image" className="thumb3-img" />
            </div>
            <h3><a href="product.html">{name} - {color}</a></h3>
            <header className="product-header">

                <data value="179" className="product-price"><del>{regularPrice}</del><br /><ins>{price}</ins>
                </data>
                <p className="details">{details}
                <a href="https://en.wikipedia.org/wiki/Fender_Stratocaster#:~:text=The%20archetypical%20Stratocaster%20is%20a,made%20from%20alder%20or%20ash.&text=Most%20Stratocasters%20have%20three%20single,control%20and%20two%20tone%20controls.">see more</a></p>
                <div className="product-rating">
                <h4>Rating</h4>
                    <span className="material-icons">star</span><span className="material-icons">star</span><span
                    className="material-icons">star</span><span className="material-icons">star</span><span
                    className="material-icons">star_half</span>
                </div>
                <form className="product-filter">
                <fieldset>
                    <legend>Colours</legend>
                    <ul>
                    <li><label><input type="radio" name="colour" value="r" /> Red</label></li>
                    <li><label><input type="radio" name="colour" value="w" /> White</label></li>
                    <li><label><input type="radio" name="colour" value="b" /> Black</label></li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>Type</legend>
                    <ol>
                    <li><label><input type="radio" name="size" value="rhanded" /> RH</label></li>
                    <li><label><input type="radio" name="size" value="lhanded" /> LH</label></li>
                    </ol>
                </fieldset>
                </form>
                <div className="add-cart">
                <button type="button" className="add-cart"><span className="material-icons">shopping_cart</span> Add to Cart</button>
                <button type="button" className="product-favorite"><span className="material-icons">favorite</span></button>
                </div>
            </header>
            </article>
            </section>
  )
}

export default ProductRow