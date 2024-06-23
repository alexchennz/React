import React from 'react';

import './Modal.css';

const modal = (props) => {
    const cssClass = [
        "Modal",
        props.modalIsOpen ? "ModalOpen" : "ModalClose"
    ];
    return (
        <div className={cssClass.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>Dismiss</button>
        </div>
    );

}

export default modal;