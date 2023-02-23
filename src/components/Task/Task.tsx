import { useContext } from 'react'
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
  
  const handlerStatusTaskTick = () => {
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

  const handlerRemoveTask = () => {
    const tasksListsWithoutItTask = LocalStore.ToDoTasksLists.map(TasksList => {
      if (TasksList.id === nowActiveTasksList.id) {
        const removedTaskList = TasksList.tasks.filter(task => task.id !== TaskData.id)
        return {...TasksList, tasks: removedTaskList}
      }

      return TasksList
    }) 

    setLocalStore({
      LocalStore: {
        ...LocalStore,
        ToDoTasksLists: tasksListsWithoutItTask,
      }
    })
  }

  return (
    <div className={`${classes.Task} ${TaskData.status ? classes.active : ''}`}>
      <div className={classes.container}>
        <div className={classes.info}>
          <button className={`${classes.tick} ${TaskData.status ? classes.active : ''}`} onClick={() => handlerStatusTaskTick()}>
            {TaskData.status && '✔'}
          </button>
          <p className={classes.title}>{TaskData.title}</p>
        </div>
        <div className={classes.buttons}>
          <button className={classes.setTask}>...</button>
          <button className={classes.removeTask} onClick={handlerRemoveTask}>
            <img src="src/assets/icons/remove.svg" alt="remove" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Task