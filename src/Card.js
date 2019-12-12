import React from 'react';
import './Card.sass';

const Card = ( props ) => {
    return(
        <div className="Card">
            <div className="spriteContainer">
                <img className="Sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="pokemon"/>
            </div>

            <h2>{ props.name }</h2>
            <p>Type: poison/grass</p>
            <h4>Stats:</h4>
            <ul>
                <li>Speed: 45</li>
                <li>Special Defense: 65</li>
                <li>Special Attack: 65</li>
                <li>Defense: 49</li>
                <li>Attack: 49</li>
                <li>HP: 45</li>
            </ul>
        </div>
    );
}

export default Card
