import React, { useState } from 'react'
//import ReactDOM from 'react-dom';
import ReactDOM, { createPortal } from 'react-dom'
import './Modal.css';
import { CSSTransition } from 'react-transition-group'

const Modal = ({ children, activator }) => {
    const [show, setShow] = useState(false);

    const content = (
        <div className="overlay">
            <div className="modal">
                <button
                    className="modal-close"
                    type="button"
                    onClick={() => setShow(false)}
                >
                    X
              </button>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    )

    //return createPortal(content, document.body);
    return (
        <>
            {activator({ setShow })}
            {createPortal(
                <CSSTransition
                    in={show}
                    timeout={120}
                    classNames="modal-transition"
                    unmountOnExit
                >
                    {() => <div>{content}</div>}
                </CSSTransition>,
                document.body)}
        </>
    )
};

export default Modal;