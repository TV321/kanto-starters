import React from 'react';
import Card from './Card';


const CardList = ( props ) =>{
    const pokemonList = props.starters.map((pok, index) => {
        return <Card
                    key= { index }
                    name={ pok.name }
                    url={ pok.url }
                />
    })
    return(

        <React.Fragment>
            { pokemonList }
        </React.Fragment>
    );
}


export default CardList
