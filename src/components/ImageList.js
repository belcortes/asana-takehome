import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

// Importing local data
import data from '../data/dogs.json'

const ImageList = () => (
  <div className="image-list">
    <GridList cellHeight={250} cols={3}>
      {data.dogs.map(dog => (
        <GridListTile key={dog.image}  >
          <img className="image" src={dog.image} alt={dog.source}/>
        </GridListTile>
      ))}
    </GridList>
  </div>
);

export default ImageList;
