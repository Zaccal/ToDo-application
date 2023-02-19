import { MouseEvent, useContext } from 'react'
import { ToDoTask } from '../../types/interfaces'
import classes from './Task.module.scss'
import useGetNowActiveTasksList from '../../hooks/useGetNowActiveTasksList'
import Global from '../../context/Global'

interface TaskProps {
  TaskData: ToDoTask
}

const Task = ({TaskData}: TaskProps) => {
  const {LocalStore} = useContext(Global)
  const nowActiveTasksList = useGetNowActiveTasksList()
  
  const handlerStatusTaskTick = (event: MouseEvent<HTMLButtonElement>) => {
    const changedTaskStatus = nowActiveTasksList.tasks.map(taskItem => {
      if (taskItem.id === TaskData.id) {
        taskItem.status = !taskItem.status
        return taskItem
      }
    })
  }

  return (
    <div className={classes.Task}>
      <div className={classes.container}>
        <div className={classes.info}>
          <button className={classes.tick} onClick={event => handlerStatusTaskTick(event)}>
            {TaskData.status && '✔'}
          </button>
          <p className={classes.title}>{TaskData.title}</p>
        </div>
      </div>

    </div>
  )
}

export default Task