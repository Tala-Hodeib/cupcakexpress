import React from 'react';
import pic from './chococupcake.jpg';
import pic2 from './lemoncupcake.jpg';
import pic3 from './redvelvetcupcake.jpg';
import pic4 from './caramelcupcake.jpg';
import pic5 from './donutcupcake.jpg';
import pic6 from './berrycupcake.jpg';
import './BuyCupcake.css';

function BuyCupcake() {
  return (
    <div>
        
        <div>
         <div className="cupcakesContainer">
    
      
            <div className='titleBuy'>
              Our Cupcakes
            </div>
            <div>
                <img className='chocolateCupcake' src={pic} alt= 'chocolate cupcake'/>
             <div className="text">Chocolate Cupcake 
                <div className='priceText'>Price: 5$</div> 
                <button className='buyButton'>Add to Cart</button>
             </div>
            </div>
    
            <div>
                <img className='lemonCupcake' src={pic2} alt= 'lemon cupcake'/>
                <div className="text">Lemon Cupcake 
                <div className='priceText'>Price: 5$ </div>
                <button className='buyButton'>Add to Cart</button>
                </div>
            </div>
    
            <div>
                <img  className='redVelvetCupcake' src={pic3} alt= 'red velvet cupcake'/>
             <div className="text">Red Velvet Cupcake
              <div className='priceText'>Price: 5$ </div>
              <button className='buyButton'>Add to Cart</button>
              
              </div>
             </div>

            <div>
              <img className='caramelCupcake' src={pic4} alt= 'caramel cupcake'/>
              <div className="text">Caramel Cupcake 
              <div className='priceText'>Price: 5$</div>
              <button className='buyButton'>Add to Cart</button>
             </div>
             </div>
    
            <div>
                <img className='donutCupcake' src={pic5} alt= 'donut cupcake'/>
             <div className="text">Donut Cupcake
              <div className='priceText'>Price: 5$ </div>
              <button className='buyButton'>Add to Cart</button>
              </div>
             </div>
    
            <div>
                <img  className='berryCupcake' src={pic6} alt= 'berry cupcake'/>
                <div className="text">Blueberry Cupcake 
                <div className='priceText'>Price: 5$ </div>
                <button className='buyButton'>Add to Cart</button>
                </div>
            </div>
    
      
      </div>
    </div>
    
   

</div>
)
}

export default BuyCupcake