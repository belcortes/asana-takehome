import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

// Importing data locally
import data from '../data/dogs.json';
import ImageModal from './ImageModal';

class ImageList extends Component {
  state = {
    open: false,
    clickedDog: ""
  };

  handleClickOpen = e => {
    this.setState({
      open: true,
      clickedDog:e.target.src
    });
  };

  handleClickClose = () => {
    console.log('close click')
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="dog-image-list">
        <GridList cellHeight={250} cols={3}>
          {data.dogs.map(dog => (
            <GridListTile key={dog.source} onClick={this.handleClickOpen}>
              <img src={dog.image} alt={dog.source} />
            </GridListTile>
          ))}
        </GridList>
        <ImageModal
          open={this.state.open}
          clickedDog={this.state.clickedDog}
          handleClickClose={this.handleClickClose}
        />
      </div>
    )
  }
};

export default ImageList;
