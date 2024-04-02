import classes from './Modal.module.css';
interface ModalRendererProps {
    children: React.ReactElement;
  }
function Modal({ children }:ModalRendererProps) {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
