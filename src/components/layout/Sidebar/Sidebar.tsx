import classes from './Sidebar.module.scss'
import editIcon from '../../../assets/icons/editing.png'
import editIconLightMode from '../../../assets/icons/editingLightMode.png'
import TasksDirectory from '../../TasksList/TasksList'
import { useContext, useState } from 'react'
import Global from '../../../context/Global'
import List from '../../List/List'

const Sidebar = () => {
  const {theme, ToDoTaskListsDefualt, ToDoTasksListsUser} = useContext(Global)
  const [searchInput, setSearchInput] = useState<string>('')

  return (
    <div style={{gridArea: 'sidebar'}} className={classes.sidebar}>
        <div className={classes.sidebarHeader}>
            <div className={classes.title}>
                <h1>ToDo</h1>
                <button className={classes.editBtn}>
                  {
                  theme === 'dark' ? <img src={editIcon} alt="editor title icon" /> : <img src={editIconLightMode} alt="editor title icon" />
                  }
                </button>
            </div>
            <input type="text" placeholder='Search' className={classes.search} value={searchInput} onChange={(event) => setSearchInput(event.target.value)}/>
        </div>
        <div className={classes.taskLists}>
            {/* Defualt task lists */}
            <List items={ToDoTaskListsDefualt} renderItem={(item) => {
              return <TasksDirectory sheetToСhange='defualtLists' status={item.status} name={item.nameList} nameFileIcon={item.icon} id={item.id} key={item.id}/>
            }}/>

            <div className={classes.line}></div>
            {/* User task lists */}
            <List items={ToDoTasksListsUser} renderItem={(item) => {
              return <TasksDirectory sheetToСhange='userLists' status={item.status} name={item.nameList} nameFileIcon={item.icon} id={item.id} key={item.id}/>
            }}/>

          </div>
    </div>
  )
}

export default Sidebar
