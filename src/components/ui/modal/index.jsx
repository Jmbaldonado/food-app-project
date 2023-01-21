import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./components/backdrop/index.jsx";
import ModalOverlay from "./components/modal-overlay/index.jsx";

const portalElement = document.getElementById("overlays");

// const Backdrop = () => {
//   return <div className={classes.backdrop} />;
// };

// const ModalOverlay = (props) => {
//   return (
//     <div className={classes.modal}>
//       <div>{props.children}</div>
//     </div>
//   );
// };
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
