import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import { MainContext } from '../context/MainProvider'

function Navbar() {
  const {basket}=useContext(MainContext)

  return (

    < div className='navbar'>

<button className='basket'>

    <Link to={"/"}><i class="fa-solid fa-house"></i></Link>
</button>
<button className='basket'>

    <Link to={"basket"}><i class="fa-solid fa-basket-shopping"></i>  {basket.length}</Link>
</button>
    
    
    
    
    </div>
  )
}

export default Navbar