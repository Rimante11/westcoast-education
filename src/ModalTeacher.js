import React from "react";
import ReactDom from "react-dom";

export default function ModalTeacher ({ open, children, onClose }) {
  
  if(!open){
    return null;
  }
  
  return ReactDom.createPortal (
    <>
      <div className="modalOverlayTeacher"></div>
      <div className="modalContainerTeacher">
        <button onClick={onClose}>Close Modal</button>
        {children} 
      </div>
    </>,
    document.getElementById('portalteacher')
  )
}