import React from 'react';
import Header from './components/header'
import Form from './components/form'
import GuessCounter from './components/guess-counter'
import GuessList from './components/guess-list'
import NavBar from './components/nav-bar'
import Overlay from './components/overlay'

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <section className="game">
        <h2 id="feedback">hot</h2>
        <Form />
        <Navbar />
        <Overlay />  
        </section>
         
     </main>
    );
  }
}
