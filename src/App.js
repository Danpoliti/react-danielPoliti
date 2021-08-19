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

//     const [cart, setCart] = useState([])
//     const [fav, setFav] = useState([]);
// // ADD
//     const AddCart =  (event, id) => {
//         const cartproduct = productsData.find(product => product.id.includes(id))
//         const cartProd = cart.find(product => product.id.includes(cartproduct.id))
//         if (cartProd===cartproduct){return}
    
//         setCart([...cart, cartproduct])
       
//       }
// // DELETE
//       const deleteItemCart =  (event, id) => {
    
//         const deleteItem = cart.filter(product => !product.id.includes(id))
        
//         setCart([...deleteItem])
    
//       }
// //move items to favourites
// const addFavorite =  (event, id) => {
//     const cartproduct = productsData.find(product => product.id.includes(id))
//     const cartProd = fav.find(product => product.id.includes(cartproduct.id))
//     if (cartProd===cartproduct){
//       const deleteItem = cart.filter(product => !product.id.includes(id))
//       setCart([...deleteItem])
//       return
//     }

//     setFav([...fav, cartproduct])
//     const deleteItem = cart.filter(product => !product.name.includes(name))
    
//     setCart([...delProduct])
    
//   }

    // const addToCart = (id) => {
    //     const index = cart.findIndex((val) => val.id === id)

    //     if (index === -1)
    //     cart.push({id: id, count: 1})
    //     else
    //     cart[index].count++

    //     setCart([...cart])
    // }

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
        const fproduct = productsData.filter(product => product.id.includes(userid))
        return fproduct
    }
	const [cart, setCart] = useState([])
    const addToCart = (id) => {
		const index = cart.findIndex((val) => val.id === id)
		
		if (index === -1) // product not found in the cart
			cart.push({id: id, count: 1})
		else
			cart[index].count++ // increase the "count" by +1
		
		setCart([...cart])
	}

    return (
        <UserContext.Provider value={{ userdata: userData, updateUsername: updateUsername, data: productsData, updateProduct: updateProduct }}>
            <CartContext.Provider value={{data: cart, updater: addToCart}}>
            <Router>
                <Switch>
                    <Route exact path="/"><Productlist data={productsData} /></Route>
                    <Route path="/product/:slug">
                        <Product />
                    </Route>
                    <Route path="*"><FourOhFour /></Route>
                    <Route path="/cart">
							<Checkout />
						</Route>
                </Switch>
            </Router>
            </CartContext.Provider>
        </UserContext.Provider>
    )
}

export default App