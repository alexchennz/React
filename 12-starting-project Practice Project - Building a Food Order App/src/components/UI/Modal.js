import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Card from './Card';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.hideModal}></div>
}

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
        {props.children}
    </Card>
  )
}

export const Modal = (props) => {
  const portalElement = document.getElementById("overlay");
  return (
    <>
        {ReactDOM.createPortal(<Backdrop hideModal={props.hideModal}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}
