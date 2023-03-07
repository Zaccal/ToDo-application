import { FC, InputHTMLAttributes } from "react";
import classes from "./EditInput.module.scss";

const EditInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input {...props} className={`${props.className} ${classes.input} rounded-sm`} />
}

export default EditInput;
