import React from 'react';
import './WhoWeAre.css';
import pic from './someone.jpg';
import pic2 from './someonetwo.jpg';


function WhoWeAre() {
  return (
    <div className='CenterPart'>
        <img className='IcingPhoto2' src={pic2} alt='cupcake photo3'/>
        <div className='GoDown'>
        <img className='IcingPhoto' src={pic} alt= 'someone icing a cupcake' />
        </div>
        <div>
         <text className='title'>Who Are We?</text>
         <text className='whoAreWeText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies, neque non pulvinar vehicula, diam risus condimentum libero, non fringilla lacus leo quis felis. Vivamus elementum nisl at velit auctor, eget porttitor ligula dictum. In pellentesque, massa a sagittis consequat, ex metus euismod quam, id imperdiet nulla lectus sed tortor. Curabitur suscipit felis non leo scelerisque, nec porttitor risus dictum. Donec porta vulputate ligula pharetra tincidunt. Suspendisse at turpis vestibulum, cursus diam sit amet, auctor augue. Ut eu odio purus.</text>
        </div>


    </div>
  )
}

export default WhoWeAre