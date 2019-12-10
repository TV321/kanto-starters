import React from 'react';
import './App.sass';
import Card from './Card';
import Head from './Head';

function App() {
  return (
      <React.Fragment>
            <Head />
            <div className="container">
                <Card />
                <Card />
                <Card />
            </div>

      </React.Fragment>
  );
}

export default App;
