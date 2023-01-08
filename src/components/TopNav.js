import React from 'react';
import './TopNav.css';
import pic from './finalogo.png';

function TopNav() {
  return (
    <div className='Nav'>
        <img className='Photo' src={pic} alt= 'cupcakelogo' />
     <div className='Pages'>
        <button className='Home'>Home</button>
        <button className='Who'>Who Are We</button>
        <button className='Buy'>Buy A Cupcake</button>
        <button className='Gallery'>Gallery</button>


    </div>


    </div>
  )
}

export default TopNav