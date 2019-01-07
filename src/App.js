import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageList from './components/ImageList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImageList />
        <Footer />
      </div>
    );
  }
}

export default App;
