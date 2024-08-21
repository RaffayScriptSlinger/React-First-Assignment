import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { isElementOfType } from 'react-dom/test-utils'

const card = [{
  name: `Raffay`,
  Batch: 11,
  Trainer: `Sir Bilal`,
  RollNumber: `219400`,
  img: "https://media.licdn.com/dms/image/D4D03AQGtHnnBhqLJvQ/profile-displayphoto-shrink_400_400/0/1711498780458?e=2147483647&v=beta&t=bbmamJ0UbBZ6DWApM4reIzRyXYX0gLmFNMb4saFY3bY"
}];

function App() {
const arr = card.map((data)=>{
  return(
    <div key={data.name}>
      <h2>Name:{data.name}</h2>
      <h2>RollNumber:{data.RollNumber}</h2>
      <h2>Trainer:{data.Trainer}</h2>
      <h2><img src={data.img} alt={data.name} id='img' /></h2>
      <h2>Batch:{data.Batch}</h2>

    </div>
    
  )
})
return <div id='mainDiv'>{arr}</div>

}


export default App;


