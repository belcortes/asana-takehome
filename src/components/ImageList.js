import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

// Importing data locally for now
import data from '../data/dogs.json';
import ImageModal from './ImageModal';

class ImageList extends Component {
  state = {
    open: false,
    clickedDog: "",
    dogs: data.dogs
  };

  //Trigger modal open
  handleClickOpen = e => {
    this.setState({
      open: true,
      clickedDog: e.target.src
    });
  };

  //Trigger modal close
  handleClickClose = () => {
    this.setState({ open: false });
  };

  // Implementing infinite scroll
  handleScroll = e => {
    if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
      this.loadMore();
    }
  }

  loadMore = () => {
    this.setState({
      // Adding repeated images for now
      dogs: [...this.state.dogs, ...data.dogs]
    });
  }

  render() {
    return (
      <div className="dog-image-list" onScroll={this.handleScroll}>
        <GridList cellHeight={250} cols={this.props.gridListCols} >
          {this.state.dogs.map((dog, i) => (
            <GridListTile key={i} onClick={this.handleClickOpen}>
              <LazyLoad height={250}>
              <img src={dog.image} alt={dog.source} />
              </LazyLoad>
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
