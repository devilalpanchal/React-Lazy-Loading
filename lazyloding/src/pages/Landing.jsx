import React from 'react'
import landing from '../assets/landing.svg'
import { Link, Outlet } from 'react-router-dom'


console.log("landing page redered")
const Landing = () => {
  return (
    <>

    <section>

    <h1> <span>E</span> commerce </h1>

    <div>
<div className='content'>
<h1>E Commerse Website</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, vero provident quas id molestiae odio.</p>
</div>
<div>
    <Link to='/login'>Login</Link>
    <Link to='/signup'>signup</Link>
    
</div>

<div>
    <img src={landing} alt="" />
</div>

    </div>


    </section>
    <Outlet/>
    </>
  )
}

export default Landing