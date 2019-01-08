import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Icon from '@material-ui/core/Icon';

// Importing data locally
import data from '../data/dogs.json';
import ImageModal from './ImageModal';

class ImageList extends Component {
  state = {
    open: false,
    clickedDog: "",
    visible: 10
  };

  handleClickOpen = e => {
    this.setState({
      open: true,
      clickedDog: e.target.src
    });
  };

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
    this.setState((prev) => {
      return {visible: prev.visible + 5};
    });
  }

  render() {
    return (
      <div className="dog-image-list" onScroll={this.handleScroll}>
        <GridList cellHeight={250} cols={this.props.gridListCols} >
          {data.dogs.slice(0, this.state.visible).map(dog => (
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
