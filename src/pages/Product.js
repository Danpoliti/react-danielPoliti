import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import Layout from 'components/Layout'
import UserContext, {useUpdateUser} from 'contexts/user'
import SingleProductRow from 'components/SingleProductRow'


const Product = () => {

    const {slug} = useParams()
  //console.log(slug)

  const newItem = useContext(UserContext)
//   const cartArr = newProduct.userCart
//   const favArr = newProduct.userFav
  
  const productId = newItem.updateProduct(slug)
  const singleProduct = productId.map(prod => <SingleProductRow key={prod.id} data={prod} />)
  


    const user = useContext(UserContext)

    console.log(user.data)
    user.updateUsername(`Politi`)
   
    return (
        <Layout>
            <header>
                {/* <h1>Product {slug}</h1> */}
                {singleProduct}
            </header>
        </Layout>
    )
}

export default Product