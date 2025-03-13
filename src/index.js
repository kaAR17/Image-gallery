import React from 'react';
import ReactDOM from 'react-dom/client';

import dog1 from './assets/images/dog1.jpg';
import dog2 from './assets/images/dog2.jpg';
import dog3 from './assets/images/dog3.jpg';
import dog4 from './assets/images/dog4.jpg';
import dog5 from './assets/images/dog5.jpg';
import dog6 from './assets/images/dog6.jpg';
import dog7 from './assets/images/dog7.jpg';
import dog8 from './assets/images/dog8.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Gallery(props) {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      
      <img 
        src={props.image} 
        alt="Gallery"
        style={{
          width: "200px",
          height: "200px",
          display: "block",
          margin: "auto",
          padding: "10px",
          borderRadius: "10px" }} 
          />
<h2>{props.Name}</h2>
       
      
    </div>
  );
}

const arr = [
  { image: dog1, Name: "Labrador" },
  { image: dog2, Name: "Bulldog" },
  { image: dog3, Name: "Doberman" },
  { image: dog4, Name: "German Shepherd" },
  { image: dog5, Name: "Beagle" },
  { image: dog6, Name: "Poodle" },
  { image: dog7, Name: "Dachshund" },
  { image: dog8, Name: "Pug" }
];

root.render(
  <div>
    <h1 style={{ textAlign: "center" }}>Image Gallery</h1>
    <div style={{border:"solid black"}}>
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {arr.map((item, index) => (
        <Gallery key={index} image={item.image} Name={item.Name} />
      ))}
    </div>
  </div>
);
