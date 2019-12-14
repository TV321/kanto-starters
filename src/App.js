import React, { Component } from 'react';
import './App.sass';
import Head from './Head';
import CardList from './CardList';

class App extends Component {

    state = {
        pokemons: []
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(resp => resp.json())
            .then(res => {
                this.setState( { pokemons: res.results })
            })
    }


    render() {

        const { pokemons } = this.state;
        const starters = pokemons.filter(poke => {
            if(poke.name === "bulbasaur" || poke.name === "charmander" ||
                poke.name === "squirtle") {
                return poke
            } else {
                return null
            }

        })
        const urlList = starters.map(pok => {
            return pok.url
        })
        return (

            <React.Fragment>
                  <Head />
                  <div className="container">
                      <CardList starters={ starters } urls={ urlList } />
                  </div>
            </React.Fragment>
        );
    }

}

export default App;
