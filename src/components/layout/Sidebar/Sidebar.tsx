import { KeyboardEvent } from 'react'
import classes from './Sidebar.module.scss'
import editIcon from '../../../assets/icons/editing.png'
import editIconLightMode from '../../../assets/icons/editingLightMode.png'
import TasksList from '../../TasksList/TasksList'
import { useContext, useState } from 'react'
import Global from '../../../context/Global'
import List from '../../List/List'

const Sidebar = () => {
  const {Settings, ToDoTaskListsDefualt, ToDoTasksListsUser, setLocalStore} = useContext(Global)
  const [searchInput, setSearchInput] = useState<string>('')
  const [changeTitleStatus, setChangeTitleStatus] = useState<boolean>(false)

  const pressKeyForChangeTitleStatus = (event: KeyboardEvent) => {
    const key = event.key

    if (key === 'Enter' || key === 'Escape') {
      setChangeTitleStatus(false)
    }
  }  

  return (
    <div style={{gridArea: 'sidebar'}} className={classes.sidebar}>
        <div className={classes.sidebarHeader}>
            <div className={classes.title}>

                {changeTitleStatus ? 
                <input 
                type="text" 
                value={Settings.headerTitle} 
                onBlur={() => setChangeTitleStatus(false)}
                onKeyUp={event => pressKeyForChangeTitleStatus(event)} 
                onChange={event => setLocalStore({ToDoTaskListsDefualt, ToDoTasksListsUser, Settings: {...Settings, headerTitle: event.target.value}})} 
                className={classes.changeTitleInput}/> : 
                <h1>{Settings.headerTitle}</h1>}

                <button className={classes.editBtn}>
                  {
                  Settings.theme === 'dark' ? 
                  <img src={editIcon} alt="editor title icon" onClick={() => setChangeTitleStatus(true)} /> : 
                  <img src={editIconLightMode} alt="editor title icon" onClick={() => setChangeTitleStatus(true)} />
                  }
                </button>

            </div>
            <input type="text" placeholder='Search' className={classes.search} value={searchInput} onChange={(event) => setSearchInput(event.target.value)}/>
        </div>
        <div className={classes.taskLists}>
            {/* Defualt task lists */}
            <List items={ToDoTaskListsDefualt} renderItem={(item) => {
              return <TasksList sheetToСhange='defualtLists' status={item.status} name={item.nameList} nameFileIcon={item.icon} id={item.id} key={item.id}/>
            }}/>

            <div className={classes.line}></div>
            {/* User task lists */}
            <List items={ToDoTasksListsUser} renderItem={(item) => {
              return <TasksList sheetToСhange='userLists' status={item.status} name={item.nameList} nameFileIcon={item.icon} id={item.id} key={item.id}/>
            }}/>

          </div>
    </div>
  )
}

export default Sidebar
