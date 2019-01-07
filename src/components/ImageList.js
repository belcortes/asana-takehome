import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Dialog from '@material-ui/core/Dialog';

// Importing data locally
import data from '../data/dogs.json'

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
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="image-list">
        <GridList cellHeight={250} cols={3}>
          {data.dogs.map(dog => (
            <GridListTile key={dog.source} onClick={this.handleClickOpen}>
              <img
                className="image"
                src={dog.image}
                alt={dog.source}
              />
            </GridListTile>
          ))}
        </GridList>
        <Dialog
          open={this.state.open}
          onClose={this.handleClickClose}
          className="image-dialog"
        >
          <img src={this.state.clickedDog} alt={this.state.clickedDog} />
        </Dialog>
      </div>
    )
  }
};

export default ImageList;
