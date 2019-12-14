import React, { Component } from 'react';
import Card from './Card';



class CardList extends Component {

    state = {
        urls: [],
        types: [],
        stats: []
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.urls !== this.props.urls) {
            const urls = this.props.urls

            Promise.all(urls.map((url, index) =>{
                return fetch(url).then(resp => resp.json())
                .then(response => {
                    this.setState(prevState => ({
                        urls: [
                            ...prevState.urls,
                            response.sprites.front_default
                        ],
                        types: [
                            ...prevState.types,
                            response.types.map(slot =>{
                                return slot.type.name + " "
                            })
                        ],
                        stats: [
                            ...prevState.stats,
                            response.stats.map((stat, i) =>{
                                return (stat.base_stat + " ")
                            })
                        ]
                    }));
                })
            }))

        }

        if (this.state.stats.length > 2) {
            console.log(this.state.stats[0][1]);
        }
        // console.log(this.state.stats)
    }


    render() {
        const pokemonList = this.props.starters.map((pok, index) => {
            return <Card
                        key= { index }
                        name={ pok.name }
                        url={ this.state.urls[index] }
                        type={ this.state.types[index] }
                        sta={ this.state.stats[index]}

                    />
        })

        return(

            <React.Fragment>
                { pokemonList }
            </React.Fragment>
        );
    }

}


export default CardList
