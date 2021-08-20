import React from 'react'
import Layout from 'components/Layout'
import image404 from 'img/guitarblack.svg'
const FourOhFour = () => {
    return (
        <Layout>
        <h1>Woops...</h1>
        <p>This page does not exist!</p>
        <img src={image404} className="error-img"></img>
        </Layout>
    )
}

export default FourOhFour