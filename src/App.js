import React, { Component } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import CurrentWork from  './components/CurrentWork/CurrentWork';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* Needs Current Portfolio Added
        <Portfolio /> */}
        <About />
        <Resume /> 
        <CurrentWork />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default App;
