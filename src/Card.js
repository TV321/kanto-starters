import React from 'react';
import './Card.css';

const DisplayCard = () => {
    return(
        <div>
            <img src="bulba.png" alt="pokemon"/>
            <h2>Bulbasaur</h2>
            <p>Type: poison/grass</p>
            <p>Stats:</p>
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
