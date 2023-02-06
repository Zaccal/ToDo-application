import { useState } from 'react'
import Container from '../../UI/Container/Container'
import Line from '../../UI/Line/Line'
import Switcher from '../../UI/Switcher/Switcher'
import classes from './Settings.module.scss'

const Settings = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <Container center={true} >
      <h1 className={classes.title}>Settings</h1>
      <Line />
      <h2 className={classes.subtitle}>General</h2>
      <Switcher checked={darkMode} checkHandler={setDarkMode}/>
    </Container>
  )
}

export default Settings