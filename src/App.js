import React from 'react'
import Productlist from './pages/Productlist'

const App = () => {

    //
    
    const productsData = [
        {
            //Product 1//
            id:`prod01`,
            name:`Eletric Guitar - Stratocaster`,
            category:`guitar`,
            regularPrice:`250.00`,
            price:`$179.00`,
            details:`The archetypical Stratocaster is a solid-body electric guitar with a contoured asymmetric double-cutaway...`,
            img:[`strato.jpg`,`strato.jpg`,`strato-white.jpg`,`strato-red.jpg`],
            color:`black`,
            type:`RH`        
        },
        {
            //Product 2//
            id:`prod02`,
            name:`Acoustic Guitar - Cutway`,
            category:`guitar`,
            regularPrice:`200.00`,
            price:`$138.00`,
            details:`An acoustic guitar is a musical instrument in the guitar family. Its strings vibrate a sound board on a...`,
            img:[`acoustic-cutway-front.jpg`,`acoustic-cutway-front-back.jpg`,`acoustic-cutway-front-back-black.jpg`,`acoustic-cutway-front.jpg`],
            color:`white`,
            type:`LH`     
        },
        {
            //Product 3//
            id:`prod03`,
            name:`Bass Guitar`,
            category:`bass`,
            regularPrice:`250.00`,
            price:`$210.00`,
            details:`The bass guitar, electric bass or simply bass, is the lowest-pitched member of the guitar family...`,
            img:[`bass-guitar.jpg`,`bass-guitar-pink.jpg`,`bass-guitar-back.jpg`,`bass-guitar.jpg`],
            color:`red`,
            type: `RH`       
        },
        {
            //Product 4//
            id:`prod04`,
            name:`Acoustic Bass`,
            category:`bass`,
            regularPrice:`480.00`,
            price:`$399.00`,
            details:`Here is a shot of this product that might entice a user to click and add it to their cart.`,
            img:[`acoustic-bass.jpg`,`acoustic-bass-ivory.jpg`,`acoustic-bass-back.jpg`,`acoustic-bass.jpg`],
            color:`black`,
            type:`RH`    
        },
        {
            //Product 5//
            id:`prod05`,
            name:`Eletric Guitar - Telecaster`,
            category:`bass`,
            regularPrice:`350.00`,
            price:`$285.00`,
            details:`Its simple yet effective design and revolutionary sound broke ground and set trends in electric.`,
            img:[`telecaster.jpg`,`telecaster-white.jpg`,`telecaster.jpg`,`telecaster-back.jpg`],
            color:`red`,
            type:`RH`      
        },
        {
            //Product 6//
            id:`prod06`,
            name:`Eletric Guitar - Les Paul`,
            category:`guitar`,
            regularPrice:`350.00`,
            price:`$275.00`,
            details:`Here is a shot of this product that might entice a user to click and add it to their cart.`,
            img:[`lespaul.png`,`lespaul-white.jpg`,`lespaul-bw.jpg`,`lespaul.png`],
            color:`white`,
            type:`RH`      
        },
    ]
    

	return(
        <Productlist result={productsData} />
    ) 
}

export default App