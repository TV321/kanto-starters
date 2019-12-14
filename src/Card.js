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
                <li>Speed: { props.sta }</li>
                <li>Special Defense: </li>
                <li>Special Attack: </li>
                <li>Defense: </li>
                <li>Attack: </li>
                <li>HP: </li>
                {/* <li>{ props.url }</li> */}
            </ul>
        </div>
    );
}

export default Card
