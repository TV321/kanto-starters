import React from 'react';
import './Card.sass';




const Card = ( props ) => {

    return(
        <div className="Card">
            <div className="spriteContainer">
                <img className="Sprite" src={ props.url } alt="pokemon"/>
                {/* <img className="Sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="pokemon"/> */}
            </div>

            <h2>{ props.name }</h2>
            <p>Type: { props.type }</p>
            <h4>Stats:</h4>
            <ul>
                <li>Speed: { props.stat[0] }</li>
                <li>Special Defense: { props.stat[1] }</li>
                <li>Special Attack: { props.stat[2] }</li>
                <li>Defense: { props.stat[3] }</li>
                <li>Attack: { props.stat[4] }</li>
                <li>HP: { props.stat[5] }</li>
                {/* <li>{ props.url }</li> */}
            </ul>
        </div>
    );
}

export default Card
