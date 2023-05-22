import React from 'react'
import index from '../../../src/index.css'
import user from '../../assets/user.png'

const Nav = () => {
  return (   
  <div>
    <nav className='main-nav'>
   
      <ul className='logo'>
        <li><img src="" alt="logo" /></li>
      </ul>
      <ul className='userMainPerfil'>
        <li>User name</li>
        <li><img src={user} alt="User photo" /></li>
      </ul>
          
    </nav>
    <ul className='sub-menu'>
        <li><img src={user} alt="User photo" /></li>
        <li>User  name</li>
        <li>User ID</li>
        <li>Exit</li>
        <li>Connect</li>
      </ul>
 </div> 
  )
}

export default Nav