import React from 'react';
import '../card-list/card-list.style.css';
import {Card} from '../card/card.component.jsx';
export const CardList =( props) =>(
     <div className="card-list">{
          props.mon.map(monster=>(
               <Card key={monster.id} monster={monster}/>
          ))}
     </div>
)