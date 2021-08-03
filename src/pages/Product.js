import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import Layout from 'components/Layout'
import UserContext, {useUpdateUser} from 'contexts/user'


const Product = () => {

    const {slug} = useParams()
    const user = useContext(UserContext)

    console.log(user.data)
    user.updateUsername(`Politi`)
   
    return (
        <Layout>
            <header>
                <h1>Product {slug}</h1>
            </header>
        </Layout>
    )
}

export default Product