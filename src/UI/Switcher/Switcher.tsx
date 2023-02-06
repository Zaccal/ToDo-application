import { setStateHundler } from '../../types/types'
import classes from './Swticher.module.scss'

const Switcher = ({checked, checkHandler}: {checked: boolean, checkHandler: setStateHundler<boolean>}) => {
  return (
    <div className={classes.switcher}>
        <input defaultChecked={checked} onClick={() => checkHandler(!checked)} type="checkbox" className={classes.checkbox}></input>
        <span className={classes.slider}></span>
    </div>
  )
}

export default Switcher