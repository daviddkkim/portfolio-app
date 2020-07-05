import * as React from "react";
import './card.css';


function Card(card : {title:string, content: string}) {
    return (
            <div className='card'>
                 <div className='content'>
                <h2>{card.title}</h2>
                <p>{card.content}</p>
                <p>asdasd</p>
                </div>
            </div>
    )
  }

export default Card;
