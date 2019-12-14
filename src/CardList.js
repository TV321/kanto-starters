import React, { Component } from 'react';
import Card from './Card';



class CardList extends Component {

    state = {
        urls: []
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
                        ]
                    }));
                })
            }))

        }
        console.log(this.state.urls)
    }

    //
    //
    //
    // const prom = Promise.all(urlList.map((url, index) =>{
    //     return fetch(url).then(resp => resp.json())
    //     .then(response => {
    //           return response.sprites.front_default
    //     })
    // }))
    //
    // let eee = []
    // prom
    //     .then((result) =>{
    //         eee.push(result[0])
    //         eee.push(result[1])
    //         eee.push(result[2])
    //     }).then(() =>{
    //         console.log(eee)
    //     })
    render() {
        const pokemonList = this.props.starters.map((pok, index) => {
            return <Card
                        key= { index }
                        name={ pok.name }
                        // url={  }

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
