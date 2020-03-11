import React, { useState } from 'react'
//import ReactDOM from 'react-dom';
import ReactDOM, { createPortal } from 'react-dom'

//import logo from './logo.svg';
import './App.css';
import Modal from './Component/Modal';

/*
const Modal = ({ children, activator }) => {
  const [show, setShow] = useState(false);
  
  const content = show && (
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
      {createPortal(content, document.body)}
    </>
  )
};
*/

const App = () => {
  //const [show, setShow] = useState(false)

  return (
    <div>
      <h1>React Modal</h1>
      <h3>with useState</h3>
      {/* <button
        type="button"
        onClick={() => setShow(true)}
      >
        Show Modal
      </button>
      <Modal show={show} setShow={setShow}>
        This is inside the modal!
      </Modal>*/}

      <Modal activator={({ setShow }) => (
        <button
          type="button"
          onClick={() => setShow(true)}
        >
          Show Modal
          </button>
      )}
      >
        This is inside the modal!
      </Modal>

      <Modal activator={({ setShow }) => (
        <button
          type="button"
          onClick={() => setShow(true)}
        >
          Show Modal 2
          </button>
      )}
      >
        This is inside the 2nd modal!
      </Modal>

      
    </div>
  )
}

export default App;
