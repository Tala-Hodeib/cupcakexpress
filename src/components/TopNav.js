import React from 'react';
import './TopNav.css';
import pic from './finalogo.png';
import pic2 from './cart.png';

function TopNav() {
  return (
    <div className='Nav'>
        <img className='Photo' src={pic} alt= 'cupcakelogo' />
     <div className='Pages'>
        
        <button className='Who'>Who Are We</button>
        <button className='Buy'>Buy A Cupcake</button>
        <button className='Gallery'>Gallery</button>
        <div className='btnIcon'>
          <button className='Cart'>Cart</button>
          <img className='cartPhoto' src={pic2} alt= 'cart icon' />
        </div>

        


    </div>


    </div>
  )
}

export default TopNav