import React, { Component } from 'react';
import withWidth from '@material-ui/core/withWidth';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageList from './components/ImageList';
import './App.scss';

class App extends Component {
  render() {
    //Setting the number of cols based on view width - for responsiveness
    const getGridListCols = () => {
      if (this.props.width === 'lg') return 3;
      if (this.props.width === 'md') return 2;
      return 1;
    }

    return (
      <div className="App">
        <Header />
        <ImageList gridListCols={getGridListCols()} />
        <Footer />
      </div>
    );
  }
}

export default withWidth()(App);
