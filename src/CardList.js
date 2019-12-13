import React from 'react';
import Card from './Card';


const CardList = ( props ) =>{

    const urlList = props.starters.map(pok => {
        return pok.url
    })

    Promise.all(urlList.map(url =>{
        return fetch(url).then(resp => resp.json())
        .then(response => {
            console.log(response.sprites.front_default)
        })
    }))



    const pokemonList = props.starters.map((pok, index) => {
        return <Card
                    key= { index }
                    name={ pok.name }
                    
                />
    })
    return(

        <React.Fragment>
            { pokemonList }
        </React.Fragment>
    );
}


export default CardList
