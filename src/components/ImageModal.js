import React from 'react';
import Dialog from '@material-ui/core/Dialog';

const ImageModal = props => (
  <Dialog
    open={props.open}
    onClose={props.handleClickClose}
    className="image-dialog"
  >
    <img src={props.clickedDog} alt={props.clickedDog} />
  </Dialog>
);

export default ImageModal;
