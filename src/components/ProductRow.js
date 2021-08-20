import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import Image from './Image.js'
import firebase from 'utils/firebase'
import UserContext from 'contexts/user'


const ProductRow = ({ data }) => {
    const { id, name, category, regularPrice, price, details, img, color, cart, type } = data

    const [fav, setFav] = useState(false);
    const db = firebase.firestore()


const addToFavorite = () => {
    console.log(fav);
    db.collection("productsData")
      .doc(id)
      .update({
        fav: !fav,
      })
      .then(() => {
        setFav(!fav);
        console.log("'Favorite' updated!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

}

const cartItem = useContext(UserContext)
const AddtoCart = cartItem.AddtoCart

    return (
        <section className="results">


            <article className="product">
                <div className="product-grid">
                    <Image src={img[0]} alt="Product Image" className="product-img" id="bigimage" />
                    <Image src={img[1]} alt="Product Image" className="thumb-img" />
                    <Image src={img[2]} alt="Product Image" className="thumb2-img" />
                    <Image src={img[3]} alt="Product Image" className="thumb3-img" />
                </div>
                <h3><Link to={`/product/${id}`}>{name} - {color}</Link></h3>
                <header className="product-header">

                    <data value="179" className="product-price"><del>${regularPrice}</del><br /><ins>${price},00</ins>
                    </data>
                    <p className="details">{details}
                        <a href="https://en.wikipedia.org/wiki/Fender_Stratocaster#:~:text=The%20archetypical%20Stratocaster%20is%20a,made%20from%20alder%20or%20ash.&text=Most%20Stratocasters%20have%20three%20single,control%20and%20two%20tone%20controls.">see more</a></p>
                    <div className="product-rating">
                        <h4>Rating</h4>
                        <span className="material-icons">star</span><span className="material-icons">star</span><span
                            className="material-icons">star</span><span className="material-icons">star</span><span
                                className="material-icons">star_half</span>
                    </div>

                    <div className="add-cart">
                        <button type="button" className="add-cart" onClick={(event) => AddtoCart(event, id)} ><span className="material-icons" >shopping_cart</span> Add to Cart</button>
                       {fav ? (
                        <button type="button" className="product-favorite" onClick={addToFavorite}><span className="material-icons">favorite</span></button>
                        ) : ( <button type="button" className="product-favorite" onClick={addToFavorite}><span className="material-icons">favorite_border</span></button>)
                       }
                                               {/* {fav ? (
                            <button type="button" className="product-favorite" onClick={(event) => AddtoFavorite(event, id)}><span className="material-icons">favorite</span></button>
                        ) : (<button type="button" className="product-favorite" onClick={(event) => DeleteFromFavorite(event, id)}><span className="material-icons">favorite_border</span></button>)
                        }
 */}
                        </div>
                </header>
            </article>
        </section>
    )


}

export default ProductRow