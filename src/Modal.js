import React from 'react';
import ReactDom from 'react-dom';

export default function Modal({ open, children, onClose }) {
  //if modal is not open return nothing
  if(!open){
    return null;
  }

    return ReactDom.createPortal (
      <> 
        <div className='modalOverlay'></div>
        <div className='modalContainer'>
          <button onClick={onClose} className="closeModalBtn">X</button>
          {children}
        </div>
      </>,
      document.getElementById('portal')
    )
  
}
