import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';
interface ModalRendererProps {
    children: React.ReactElement;
  }
function Modal({ children }:ModalRendererProps) {
  const navigate = useNavigate()

  const onCloseModal = ()=>{
    navigate('/')
  }
  return (
    <>
      <div className={classes.backdrop} onClick={onCloseModal}/>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
