import Sidebar from '../../modules/Sidebar/Sidebar'
import ModalAddTasksList from '../../modules/ModalAddTasksList/ModalAddTasksList'
import classes from './Home.module.scss'
import { useState } from 'react'

const Home = () => {  
  const [modalAddTasksListStatus, setModalAddTasksList] = useState<boolean>(false)
  
  return (
    <>
      <div className={classes.layout}>
        <Sidebar modalAddTasksListHandler={setModalAddTasksList}/>
      </div>
      <ModalAddTasksList  statusModal={modalAddTasksListStatus} handlerStatusModal={setModalAddTasksList}/>
    </>
  )
}

export default Home
