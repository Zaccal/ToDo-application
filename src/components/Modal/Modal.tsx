import { ReactNode, useEffect, useState } from "react";
import { setStateHundler } from "../../types/types";
import classes from "./Modal.module.scss";
import CloseButton from "../../UI/CloseButton/CloseButton";

interface ModalProps {
  status: boolean;
  statusHandler: setStateHundler<boolean>;
  closeButton?: boolean;
  children: ReactNode | undefined | boolean | null;
  title?: string;
}

const Modal = ({status, statusHandler, closeButton, children, title}: ModalProps) => {
  const [rootClassesBackground, setRootClassesBackground] = useState([classes.modal_bacgkround])
  const [rootClassesContainer, setRootClassesContainer] = useState([classes.container])

  useEffect(() => {
    if (status) {    
      setRootClassesBackground([...rootClassesBackground, 'block'])
      setRootClassesContainer([...rootClassesContainer, 'block'])

      setTimeout(() => {
        setRootClassesBackground([...rootClassesBackground, classes.active, 'block'])
        setTimeout(() => {
            setRootClassesContainer([...rootClassesContainer, classes.active, 'block'])
        }, 10)
      }, 5)
    }

    else if (rootClassesBackground.includes(classes.active) && !status) {
      setRootClassesBackground([classes.modal_bacgkround, 'block'])
      setRootClassesContainer([classes.container, 'block'])

      setTimeout(() => {
        setRootClassesBackground([classes.modal_bacgkround])
        setRootClassesContainer([classes.container])
      }, 100)
    }
  }, [status])

  return (
    <div className={rootClassesBackground.join(' ')} onClick={() => statusHandler(false)}>
      <div className={rootClassesContainer.join(' ')}>

        {title || closeButton ? (
          <div className={`${classes.header} ${title ? '' : classes.onlyButton}`}>
            {title && <p className={classes.title}>{title}</p>}
            {closeButton && (<CloseButton onClick={event => {
                event.stopPropagation()
                statusHandler(false)
            }} />)}
          </div>
        ) : (<></>)}

        <div className={classes.content}>
            {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
