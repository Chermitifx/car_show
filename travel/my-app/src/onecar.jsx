
import React, { useState } from 'react';

import KM from "./image/kilometrage.png"
import Energy from "./image/energie.png"
import Year from "./image/date.png"
import Location from "./image/place.jpeg"
import Model  from "./image/modele.jpg"
import Price from "./image/price.png"
function OneCar({ details}) {
  const [load, setLoad] = useState(false);
  const [index, setindex] = useState(0)

  const [name,setName]=useState(details.logo)
  //useEffect(()=>{
 
    if( index>=name.length){setindex(0)}
    else if( index<0){setindex(name.length-1)}



    
  return (
    <>
      {load ? (
        < >
        <div className='product-previou'> 

      

          <img  className='productnail' src={name[index]} alt="Car logo" />
          <a class="prev" onClick={()=> setindex(index-1)} >&#10094;</a>
          <a class="next" onClick={()=> setindex(index+1)}>&#10095;</a>
          <h2> Product {details.id} </h2> 

          <div class="product-details" >
            <div > <img class="details-grid" src={KM}/> 120000 km </div>
            <div > <img class="details-grid" src={Energy} /> Essence </div>
            <div > <img class="details-grid" src={Year} /> 2019 </div>
            <div > <img class="details-grid" src={Location} /> Sousse </div>
            <div > <img class="details-grid" src={Model} /> volkswagen </div>
            <div > <img class="details-grid" src={Price} />{details.price} $</div>
          </div>

          <p>{details.text}</p>
          <button onClick={() => setLoad(!load)}>Load Less ...</button>
          </div>
        </>
      ) : (
        <>
        <div className='product-previou'>

          <img className='productnail' src={name[index]} alt="Car logo" />
          <a class="prev" onClick={()=> setindex(index-1)} >&#10094;</a>
          <a class="next" onClick={()=> setindex(index+1)}>&#10095;</a>
          <h2> Product {details.id}</h2>

          <div class="product-details" >
            <div > <img class="details-grid" src={KM}/> 120000 km </div>
            <div > <img class="details-grid" src={Energy} /> Essence </div>
            <div > <img class="details-grid" src={Year} /> 2019 </div>
            <div > <img class="details-grid" src={Location} /> Sousse </div>
            <div > <img class="details-grid" src={Model} /> volkswagen </div>
            <div > <img class="details-grid" src={Price} />{details.price} $</div>
          </div>

          <p>{details.text.substring(0,50)}...</p>
          <button onClick={() => setLoad(!load)}>Load more ...</button>
          </div>
        </>
      )}
    </>
  );
}

export default OneCar;
