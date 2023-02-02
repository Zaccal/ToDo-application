import { useContext, MouseEventHandler } from "react";
import Global from "../../context/Global";
import classes from './CloseButton.module.scss'

interface CloseButtonProps {
    width?: number,
    height?: number,  
    onClick?: MouseEventHandler<HTMLButtonElement>,
    className?: string, 
}

const CloseButton = ({width, height, onClick, className}: CloseButtonProps) => {
  const { Settings } = useContext(Global);

  return (
    <button onClick={onClick} className={`${className} ${classes.close}`} style={{width: width, height: height}}>
      {Settings.theme === "dark" ? (
        <img src="../src/assets/icons/close.png" alt="closeButton" />
      ) : (
        <img src="../src/assets/icons/close.png" alt="closeButton" />
      )}
    </button>
  );
};

export default CloseButton;
