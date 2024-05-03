import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Home.scss"
import { useContext } from 'react'
import { MainContext } from '../context/MainProvider'

function Home() {

    const [products, setproducts] = useState([])
const {addbasket}=useContext(MainContext)



    useEffect(() => {
   fetch("https://fakestoreapi.com/products")
   .then(res=>res.json())
   .then(data=>setproducts(data))
    }, [])

  
  return (
    <div>
  <h1>home</h1>
  <div className='cards' >
{products.map((x)=> <div className='card' key={x.id}>
  <img src={x.image} alt="" />
  <h3>{x.category}</h3>
  <p>{x.title}</p>
  <p>{x.price}</p>
  <button onClick={()=>addbasket(x)}> <i class="fa-solid fa-basket-shopping"></i> </button>


</div>
)}


  </div>


    </div>
  )
}

export default Home