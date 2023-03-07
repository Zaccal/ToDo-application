import { ReactNode, useContext } from "react"
import classes from './Option.module.scss'
import Global from "../../context/Global"

interface optionProps {
  children?: ReactNode | null
  iconName: string,
  onClick: () => void
}

const Option = ({children, iconName, onClick}: optionProps) => {
  const {LocalStore} = useContext(Global)
  
  const icon = LocalStore.Settings.theme === 'dark' ? iconName : iconName.split('.')[0] + 'LightMode.svg'
  
  return (
    <div className={classes.option} onClick={onClick}>
      <img src={`../src/assets/icons/${icon}`} alt={`${iconName.split('.')[0]}-icon`} className={classes.icon} />    
      {children}
    </div>
  )
}

export default Option