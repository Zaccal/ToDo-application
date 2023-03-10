import Container from "../../UI/Container/Container"
import Line from "../../UI/Line/Line"
import List from "../../components/List/List"
import Task from "../../components/Task/Task"
import useGetNowActiveTasksList from "../../hooks/useGetNowActiveTasksList"
import classes from './TasksClipboard.module.scss'
import AddTaskInput from '../../components/AddTaskInput/AddTaskInput'
import useSortTasks from "../../hooks/useSortTasks"
import Options from "../../components/Options/Options"

const TasksClipboard = () => {
  const nowActiveTasksList = useGetNowActiveTasksList()
  const sortedTask = useSortTasks(nowActiveTasksList.tasks, 'status')

  return (
    <div className={classes.TasksClipboard} style={{'gridArea': 'content'}}>
        <Container maxWidth="1480" className="h-[94%] relative mt-10" center={true}>
          {/* Other compoent 'TaskClipBoardTitle' */}
          <div className={classes.header}>
            <h1 className={`animate__animated animate__fadeInUp ${classes.title}`} >
              {typeof(nowActiveTasksList.icon) === 'string' && (<img className={classes.icon} src={`/src/assets/icons/${nowActiveTasksList.icon}`} alt="task-list-icon"/>)}
              <span>{nowActiveTasksList.nameList}</span>
            </h1>
            <Options title="options task list" options={[{
              name: 'Rename list',
              eventClick: () => undefined,
              id: 1,
              iconName: 'rename.svg'
            }]}/>              
          </div>
          <Line />
          <List items={sortedTask} renderItem={taskItem => {
            return <Task TaskData={taskItem} key={taskItem.id}/>
          }}/>
          <AddTaskInput />
        </Container>
    </div>
  )
}

export default TasksClipboard