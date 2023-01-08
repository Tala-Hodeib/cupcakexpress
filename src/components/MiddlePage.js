import React from 'react';
import './MiddlePage.css';
import pic from './someone.jpg';
import pic2 from './someonetwo.jpg';


function MiddlePage() {
  return (
    <div className='CenterPart'>

        <img className='IcingPhoto2' src={pic2} alt='cupcake photo3'/>
        <div className='GoDown'>
        <img className='IcingPhoto' src={pic} alt= 'someone icing a cupcake' />
        </div>
        <div>
        <text></text>
        </div>


    </div>
  )
}

export default MiddlePage