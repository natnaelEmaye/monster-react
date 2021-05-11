import React from 'react';
import './card.style.css'
export const Card = (props) =>{
   return(
        <div className="card"> 
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt=""/>
            <h1>{props.monster.name}</h1> 
            <h2>{props.monster.email}</h2>
        </div>
   ) 
}