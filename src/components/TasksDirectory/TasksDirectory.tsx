import { useContext } from 'react'
import TasksDerectoryIcon from '../../assets/icons/clipboard.png'
import Global from '../../context/Global'

interface TasksDirectoryProps {
  status: boolean,
  name: string,
  icon: string,
}

const TasksDirectory = () => {

  const {theme} = useContext(Global)

  return (
    <div>TasksDirectory</div>
  )
}

export default TasksDirectory