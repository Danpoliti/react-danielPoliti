const firebase = require('firebase/app');
require('firebase/firestore')


var firebaseConfig = {

    apiKey: "AIzaSyBS1jyIaEZwK0A5VTozyNNjzaEjuzCLdeY",
    authDomain: "politi-d6727.firebaseapp.com",
    projectId: "politi-d6727",
    storageBucket: "politi-d6727.appspot.com",
    messagingSenderId: "746622181005",
    appId: "1:746622181005:web:3c2befa94ca1912c094cc4"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()



const batchSetter = async (collection, records) => {
    const batch = db.batch()
  
    records.forEach((record) => {
      batch.set(
        db.collection(collection).doc(record.id),
        record
      )
    })
  
    return await batch.commit().then(() => {
      console.log(`Updated to "${collection}"`)
    })
  }

  const runScripts = async () => {
  
    await batchSetter(`productsData`, [
      {
        //Product 1//
        id: `01`,
        name: `Eletric Guitar - Stratocaster`,
        category: `guitar`,
        regularPrice: `250.00`,
        price: 179.00,
        details: `The archetypical Stratocaster is a solid-body electric guitar with a contoured asymmetric double-cutaway...`,
        img: [`strato.jpg`, `strato.jpg`, `strato-white.jpg`, `strato-red.jpg`],
        color: `black`,
        type: `RH`,
        fav: false
    },
    {
        //Product 2//
        id: `02`,
        name: `Acoustic Guitar - Cutway`,
        category: `guitar`,
        regularPrice: `200.00`,
        price: 138.00,
        details: `An acoustic guitar is a musical instrument in the guitar family. Its strings vibrate a sound board on a...`,
        img: [`acoustic-cutway-front.jpg`, `acoustic-cutway-front-back.jpg`, `acoustic-cutway-front-back-black.jpg`, `acoustic-cutway-front.jpg`],
        color: `white`,
        type: `LH`,
        fav: false
    },
    {
        //Product 3//
        id: `03`,
        name: `Bass Guitar`,
        category: `bass`,
        regularPrice: `250.00`,
        price: 210.00,
        details: `The bass guitar, electric bass or simply bass, is the lowest-pitched member of the guitar family...`,
        img: [`bass-guitar.jpg`, `bass-guitar-pink.jpg`, `bass-guitar-back.jpg`, `bass-guitar.jpg`],
        color: `red`,
        type: `RH`,
        fav: false
    },
    {
        //Product 4//
        id: `04`,
        name: `Acoustic Bass`,
        category: `bass`,
        regularPrice: `480.00`,
        price: 399.00,
        details: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        img: [`acoustic-bass.jpg`, `acoustic-bass-ivory.jpg`, `acoustic-bass-back.jpg`, `acoustic-bass.jpg`],
        color: `black`,
        type: `RH`,
        fav: false
    },
    {
        //Product 5//
        id: `05`,
        name: `Eletric Guitar - Telecaster`,
        category: `bass`,
        regularPrice: `350.00`,
        price: 285.00,
        details: `Its simple yet effective design and revolutionary sound broke ground and set trends in electric.`,
        img: [`telecaster.jpg`, `telecaster-white.jpg`, `telecaster.jpg`, `telecaster-back.jpg`],
        color: `red`,
        type: `RH`,
        fav: false
    },
    {
        //Product 6//
        id: `06`,
        name: `Eletric Guitar - Les Paul`,
        category: `guitar`,
        regularPrice: `350.00`,
        price: 275.00,
        details: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        img: [`lespaul.png`, `lespaul-white.jpg`, `lespaul-bw.jpg`, `lespaul.png`],
        color: `white`,
        type: `RH`,
        fav: false
    },
    {
        //Product 7//
        id: `07`,
        name: `Eletric Guitar - Les Paul`,
        category: `guitar`,
        regularPrice: `350.00`,
        price: 275.00,
        details: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        img: [`lespaul.png`, `lespaul-white.jpg`, `lespaul-bw.jpg`, `lespaul.png`],
        color: `white`,
        type: `RH`,
        fav: false
    },
    {
        //Product 8//
        id: `08`,
        name: `Eletric Guitar - Les Paul`,
        category: `guitar`,
        regularPrice: `350.00`,
        price: 275.00,
        details: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        img: [`lespaul.png`, `lespaul-white.jpg`, `lespaul-bw.jpg`, `lespaul.png`],
        color: `white`,
        type: `RH`,
        fav: false
    },
    {
        //Product 9//
        id: `09`,
        name: `Eletric Guitar - Les Paul`,
        category: `guitar`,
        regularPrice: `350.00`,
        price: 275.00,
        details: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        img: [`lespaul.png`, `lespaul-white.jpg`, `lespaul-bw.jpg`, `lespaul.png`],
        color: `white`,
        type: `RH`,
        fav: false
    },
    {
        //Product 10//
        id: `10`,
        name: `Eletric Guitar - Les Paul`,
        category: `guitar`,
        regularPrice: `350.00`,
        price: 275.00,
        details: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        img: [`lespaul.png`, `lespaul-white.jpg`, `lespaul-bw.jpg`, `lespaul.png`],
        color: `white`,
        type: `RH`,
        fav: false
    },

    {
        //Product 11//
        id: `11`,
        name: `Eletric Guitar - Stratocaster`,
        category: `guitar`,
        regularPrice: `250.00`,
        price: 199.00,
        details: `The archetypical Stratocaster is a solid-body electric guitar with a contoured asymmetric double-cutaway...`,
        img: [`strato.jpg`, `strato.jpg`, `strato-white.jpg`, `strato-red.jpg`],
        color: `black`,
        type: `RH`,
        fav: false
    },
    {
        //Product 12//
        id: `12`,
        name: `Acoustic Guitar - Cutway`,
        category: `guitar`,
        regularPrice: `300.00`,
        price: 238.00,
        details: `An acoustic guitar is a musical instrument in the guitar family. Its strings vibrate a sound board on a...`,
        img: [`acoustic-cutway-front.jpg`, `acoustic-cutway-front-back.jpg`, `acoustic-cutway-front-back-black.jpg`, `acoustic-cutway-front.jpg`],
        color: `white`,
        type: `LH`,
        fav: false
    },
    {
        //Product 13//
        id: `13`,
        name: `Bass Guitar`,
        category: `bass`,
        regularPrice: `350.00`,
        price: 310.00,
        details: `The bass guitar, electric bass or simply bass, is the lowest-pitched member of the guitar family...`,
        img: [`bass-guitar.jpg`, `bass-guitar-pink.jpg`, `bass-guitar-back.jpg`, `bass-guitar.jpg`],
        color: `red`,
        type: `RH`,
        fav: false
    },
    {
        //Product 14//
        id: `14`,
        name: `Acoustic Bass`,
        category: `bass`,
        regularPrice: `580.00`,
        price: 499.00,
        details: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        img: [`acoustic-bass.jpg`, `acoustic-bass-ivory.jpg`, `acoustic-bass-back.jpg`, `acoustic-bass.jpg`],
        color: `black`,
        type: `RH`,
        fav: false
    },
    {
        //Product 15//
        id: `15`,
        name: `Eletric Guitar - Telecaster`,
        category: `bass`,
        regularPrice: `450.00`,
        price: 385.00,
        details: `Its simple yet effective design and revolutionary sound broke ground and set trends in electric.`,
        img: [`telecaster.jpg`, `telecaster-white.jpg`, `telecaster.jpg`, `telecaster-back.jpg`],
        color: `red`,
        type: `RH`,
        fav: false
    },
    {
        //Product 16//
        id: `16`,
        name: `Eletric Guitar - Les Paul`,
        category: `guitar`,
        regularPrice: `450.00`,
        price: 375.00,
        details: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        img: [`lespaul.png`, `lespaul-white.jpg`, `lespaul-bw.jpg`, `lespaul.png`],
        color: `white`,
        type: `RH`,
        fav: false
    },
    {
        //Product 17//
        id: `17`,
        name: `Eletric Guitar - Les Paul`,
        category: `guitar`,
        regularPrice: `450.00`,
        price: 375.00,
        details: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        img: [`lespaul.png`, `lespaul-white.jpg`, `lespaul-bw.jpg`, `lespaul.png`],
        color: `white`,
        type: `RH`,
        fav: false
    },
    {
        //Product 18//
        id: `18`,
        name: `Eletric Guitar - Les Paul`,
        category: `guitar`,
        regularPrice: `450.00`,
        price: 375.00,
        details: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        img: [`lespaul.png`, `lespaul-white.jpg`, `lespaul-bw.jpg`, `lespaul.png`],
        color: `white`,
        type: `RH`,
        fav: false
    },
    {
        //Product 19//
        id: `19`,
        name: `Eletric Guitar - Les Paul`,
        category: `guitar`,
        regularPrice: `450.00`,
        price: 375.00,
        details: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        img: [`lespaul.png`, `lespaul-white.jpg`, `lespaul-bw.jpg`, `lespaul.png`],
        color: `white`,
        type: `RH`,
        fav: false
    },
    {
        //Product 20//
        id: `20`,
        name: `Eletric Guitar - Les Paul`,
        category: `guitar`,
        regularPrice: `450.00`,
        price: 375.00,
        details: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
        img: [`lespaul.png`, `lespaul-white.jpg`, `lespaul-bw.jpg`, `lespaul.png`],
        color: `white`,
        type: `RH`,
        fav: false
    },

    ])

    process.exit();
}

runScripts()