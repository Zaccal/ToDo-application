import Container from "../../UI/Container/Container"
import Line from "../../UI/Line/Line"
import List from "../../components/List/List"
import Task from "../../components/Task/Task"
import useGetNowActiveTasksList from "../../hooks/useGetNowActiveTasksList"
import classes from './TasksClipboard.module.scss'

const TasksClipboard = () => {
  const nowActiveTasksList = useGetNowActiveTasksList()

  return (
    <div className={classes.TasksClipboard} style={{'gridArea': 'content'}}>
        <Container maxWidth="1480" className="mt-10" center={true}>
          <div className={classes.header}>
            <h1 className={`animate__animated animate__fadeInUp ${classes.title}`} >
              {typeof(nowActiveTasksList.icon) === 'string' && (<img className={classes.icon} src={`/src/assets/icons/${nowActiveTasksList.icon}`} alt="task-list-icon"/>)}
              <span>{nowActiveTasksList.nameList}</span>
            </h1>
            <button title="settings tasts list" className={classes.setting}>
              ...
            </button>
          </div>
          <Line />
          <List items={nowActiveTasksList.tasks} renderItem={taskItem => {
            return <Task TaskData={taskItem} key={taskItem.id}/>
          }}/>
        </Container>
    </div>
  )
}

export default TasksClipboard