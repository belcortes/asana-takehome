import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

// Importing local data
import data from '../data/dogs.json'

const ImageList = () => (
  <div>
    {console.log(data)}
    <GridList>
      {data.dogs.map(dog => (
        <GridListTile key={dog.image} cols={dog.cols || 1}>
          <img src={dog.image} alt={dog.source}/>
        </GridListTile>
      ))}
    </GridList>
  </div>
);

export default ImageList;
