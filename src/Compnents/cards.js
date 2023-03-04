import React from 'react';

function Card(props){
    return (
      <div className="container">
      
      <div className="head">
      <h1>{props.name}</h1>
      </div>
      <img src='' alt='image'/>
      <div className='foot'>
      <p>{props.tel}</p>
      <p>{props.email}</p>
      </div>
      
      </div>
    )
  }
  export default Card;