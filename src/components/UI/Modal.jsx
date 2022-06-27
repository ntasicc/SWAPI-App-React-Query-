import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-20 bg-gray-900 bg-opacity-75 transition-opacity"
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-44 xl:w-2/6 lg:w-2/5 p-4 rounded-2xl shadow-lg z-30 slide-down xl:left-1/3 sm:left-1/4 md:w-3/6 left-28 bg-gray-300">
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
