import React, { createContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserContext, { useUpdateUser } from 'contexts/user'
import CartContext, { useMoney } from 'contexts/cart'
import Checkout from 'pages/Checkout'
import Productlist from 'pages/Productlist'
import Product from 'pages/Product'
import FourOhFour from 'pages/FourOhFour'
import firebase from 'utils/firebase'

const App = () => {

    const [loadProd, setLoadProd] = useState(false)

    const [productsData, setProductsData] = useState([])

    const db = firebase.firestore()

    useEffect(() => {
        const loadData = async () => {
    
          
          setLoadProd(true)
          
          await db.collection(`productsData`).get().then((snapshot) => {
            setProductsData(snapshot.docs.map(doc => doc.data()))
          })
          
         setLoadProd(false)
        }
        
        loadData()
      }, [])

    const userData = {
        id: 1234,
        username: `Daniel Politi`,
        photo: `danpoliti.jpg`
    }

    const updateUsername = (name) => {
        //go update the database
        userData.username = name
        console.log(`App()`, userData)
    }

    const updateProduct = (userid) => {
        const fproduct = productsData.filter(product => product.id.includes(userid)) //CHAGE BARIABLE NAME
        return fproduct
    }
    const [addCart, setAddCart] = useState([])
    const [addFavorite, setAddFavorite] = useState ([])

    const AddtoCart =  (event, userid) => {
        const cartProduct = productsData.find(product => product.id.includes(userid))
 
        
    console.log(cartProduct)
        setAddCart([...addCart, cartProduct])
       
      }
      
    const AddtoFavorite =  (event, userid) => {
        const favProduct = productsData.find(product => product.id.includes(userid))
 
        
    console.log(favProduct)
        setAddFavorite([...addFavorite, favProduct])
       
      }
      const DeletefromCart =  (event, prodid) => {
    
        const delItem = addCart.filter(product => !product.id.includes(prodid))
        
        setAddCart([...delItem])
    
      }
      const DeletefromFavorite =  (event, prodid) => {
    
        const delItemFavorite = addFavorite.filter(product => !product.id.includes(prodid))
        
        setAddFavorite([...delItemFavorite])
    
      }



    return (
        <UserContext.Provider value={{addFavorite: addFavorite,DeletefromFavorite: DeletefromFavorite,AddtoFavorite: AddtoFavorite,DeletefromCart: DeletefromCart, addCart: addCart, userdata: userData, updateUsername: updateUsername, data: productsData, updateProduct: updateProduct, AddtoCart: AddtoCart
         }}>
            <CartContext.Provider value={{data: addCart}}>
            <Router>
                <Switch>
                    <Route exact path="/"><Productlist data={productsData} /></Route>
                    <Route path="/product/:slug">
                        <Product />
                    </Route>
                    <Route path="/Checkout">
							<Checkout />
						</Route>
                    <Route path="*"><FourOhFour /></Route>
                </Switch>
            </Router>
            </CartContext.Provider>
        </UserContext.Provider>
    )
}

export default App