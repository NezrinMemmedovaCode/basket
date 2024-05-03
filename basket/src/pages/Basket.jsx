import React, { useContext } from 'react'
import { MainContext } from '../context/MainProvider'
import "./Home.scss"

function Basket () {
  const {basket,addbasket}=useContext(MainContext);
  return (
    <div>
<h1>basket</h1>
<div className='cards' >
{basket.map((x)=> <div className='card' key={x.id}>
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

export default Basket