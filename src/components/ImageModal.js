import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Icon from '@material-ui/core/Icon';

const ImageModal = props => (
  <div>
  <Dialog
    open={props.open}
    onClose={props.handleClickClose}
    className="image-dialog"
  >
    <Icon className="modal-close-icon">highlight_off</Icon>
    <img src={props.clickedDog} alt={props.clickedDog} />
  </Dialog></div>
);

export default ImageModal;
