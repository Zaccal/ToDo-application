import { FC, InputHTMLAttributes } from 'react';
import classes from './SearchInput.module.scss'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    iconFileName?: string,
}

const SearchInput: FC<SearchInputProps> = (props) => {
  const {iconFileName, ...rest} = props

  return (
  <div className={classes.input_container}>
    {props.iconFileName && <img className={classes.icon} src={`../../src/assets/icons/${props.iconFileName}`} alt={`icon ${props.iconFileName}`} />}
    <input {...rest} className={`${props.className} ${classes.input}`}/>
  </div>
  );
};

export default SearchInput;
