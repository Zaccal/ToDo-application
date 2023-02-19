import { MouseEvent, useContext } from 'react'
import { ToDoTask } from '../../types/interfaces'
import classes from './Task.module.scss'
import useGetNowActiveTasksList from '../../hooks/useGetNowActiveTasksList'
import Global from '../../context/Global'

interface TaskProps {
  TaskData: ToDoTask
}

const Task = ({TaskData}: TaskProps) => {
  const {LocalStore, setLocalStore} = useContext(Global)
  const nowActiveTasksList = useGetNowActiveTasksList()
  
  const handlerStatusTaskTick = (event: MouseEvent<HTMLButtonElement>) => {
    const changedTaskStatusTasksLists = LocalStore.ToDoTasksLists.map(TasksList => {
      if (TasksList.id === nowActiveTasksList.id) {
        
        const chanedTaskStatus =  TasksList.tasks.map(task => {
          if (task.id === TaskData.id) {
            task.status = !task.status
            return task
          }

          return task
        })
        
        return {...TasksList, tasks: chanedTaskStatus}

      }
    
      return TasksList
    })

    setLocalStore({
      LocalStore: {
        ...LocalStore,
        ToDoTasksLists: changedTaskStatusTasksLists,
      }
    })
  }

  return (
    <div className={`${classes.Task} ${TaskData.status ? classes.active : ''}`}>
      <div className={classes.container}>
        <div className={classes.info}>
          <button className={`${classes.tick} ${TaskData.status ? classes.active : ''}`} onClick={event => handlerStatusTaskTick(event)}>
            {TaskData.status && '✔'}
          </button>
          <p className={classes.title}>{TaskData.title}</p>
        </div>
      </div>

    </div>
  )
}

export default Task