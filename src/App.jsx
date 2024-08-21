import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { isElementOfType } from 'react-dom/test-utils'

const cardItems = [
  {
    id: 1, Title: 'Carton HoneyComb',
    price: 180,
    description: "Multiple individually wrapped honeycomb packages, ideal for retailers.",
    img: "https://images.unsplash.com/photo-1647618983077-b9d5e9037517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FydG9uJTIwSG9uZXlDb21ifGVufDB8fDB8fHww",
  },

  {
    id: 2, Title: 'Box of Chocolate Bars',
    price: 250,
    description: "A variety of premium chocolate bars, perfect for gifting.",
    img: "https://plus.unsplash.com/premium_photo-1671059792129-8fb1cff208f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Qm94JTIwb2YlMjBDaG9jb2xhdGUlMjBCYXJzfGVufDB8fDB8fHww",
  },

  {
    id: 3, Title: 'Pack of Organic Tea Bags',
    price: 120, description: "50 organic tea bags in various flavors for a relaxing beverage.",
    img: "https://images.unsplash.com/photo-1523920290228-4f321a939b4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFjayUyMG9mJTIwT3JnYW5pYyUyMFRlYSUyMEJhZ3N8ZW58MHx8MHx8fDA%3D",
  },

  {
    id: 4, Title: 'Assorted Cookie Tin',
    price: 300,
    description: "A tin with freshly baked cookies, perfect for special occasions.",
    img: "https://images.unsplash.com/photo-1590080874088-eec64895b423?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXNzb3J0ZWQlMjBDb29raWUlMjBUaW58ZW58MHx8MHx8fDA%3D",
  },

  {
    id: 5, Title: 'Gift Basket of Exotic Fruits',
    price: 500,
    description: "A basket of exotic fruits, ideal for health-conscious individuals.",
    img: "https://plus.unsplash.com/premium_photo-1661602179368-27aea14f3f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R2lmdCUyMEJhc2tldCUyMG9mJTIwRXhvdGljJTIwRnJ1aXRzfGVufDB8fDB8fHww",
  },

  {
    id: 6, Title: 'Jar of Artisan Honey',
    price: 150,
    description: "Pure, raw honey, perfect for gourmet recipes and sweetening.",
    img: "https://plus.unsplash.com/premium_photo-1720417415151-7ac969ed1dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SmFyJTIwb2YlMjBBcnRpc2FuJTIwSG9uZXl8ZW58MHx8MHx8fDA%3D",
  },

  {
    id: 7, Title: 'Box of Gourmet Coffee Beans',
    price: 200,
    description: "1kg of gourmet coffee beans, perfect for coffee enthusiasts.",
    img: "https://plus.unsplash.com/premium_photo-1675237625845-ed58c887f3cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Qm94JTIwb2YlMjBHb3VybWV0JTIwQ29mZmVlJTIwQmVhbnN8ZW58MHx8MHx8fDA%3D",
  },

  {
    id: 8, Title: 'Set of Handmade Candles',
    price: 220,
    description: "Three natural beeswax candles, ideal for creating a soothing ambiance.",
    img: "https://plus.unsplash.com/premium_photo-1695838578188-82ca5670a8a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2V0JTIwb2YlMjBIYW5kbWFkZSUyMENhbmRsZXN8ZW58MHx8MHx8fDA%3D",
  },

  {
    id: 9, Title: 'Basket of Organic Vegetables',
    price: 180,
    description: "A selection of fresh, organic vegetables, perfect for healthy meals.",
    img: "https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJhc2tldCUyMG9mJTIwT3JnYW5pYyUyMFZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D"
  },

  {
    id: 10, Title: 'Collection of Herbal Spices',
    price: 140,
    description: "A set of five herbal spices, ideal for adding flavor to dishes.",
    img: "https://images.unsplash.com/photo-1529517986296-847580704921?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }

];


function App() {
  const arr = cardItems.map((data) => {
    return (
      <div key={data.id}>
        <h2>Id:{data.id}</h2>
        <h2>Title:{data.Title}</h2>
        <h2>Price:{data.price}</h2>
        <img src={data.img} alt={data.id} id='img' />
        <h2>Description:{data.description}</h2>
      </div>


    )
  })
  return <div id='mainDiv'>{arr}</div>

}


export default App;


