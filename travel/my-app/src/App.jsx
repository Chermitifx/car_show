
import { useState } from 'react';
import './App.css';
import logo1 from './image/1.jpg';
import logo2 from './image/2.jpg';
import logo3 from './image/3.png';
import logo4 from './image/4.png';
import logo5 from './image/5.jpg';
import logo6 from './image/6.jpg';
import AllCars from './allcars';

function App() {
  const data = [
    { id:1, logo:[ logo1, logo2 ,logo3 , logo4 ] , price: 10000, text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio" }
    ,
    { id:2, logo:[ logo2, logo6 ,logo3 , logo4 ] , price: 12000, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitation"},
    { id:3, logo:[ logo2, logo6 ,logo3 , logo4 ] , price: 12000,   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitation"},
    { id:4, logo:[ logo4, logo2 ,logo5 , logo1 ] , price: 17000,   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitation"},
    { id:5, logo:[ logo5, logo2 ,logo3 , logo4 ] , price: 15000,   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitation"},
    { id:6, logo:[ logo6, logo5 ,logo1 , logo4 ] , price: 22000,   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, exercitation"}
   ];
//onclick="plusSlides(-1)"
  return (
    <>  
    <h2>Welcome to our Page</h2>
    <div className='product-grid'>
      <AllCars details={data} />
        </div>
    </>
  );
}

export default App;

