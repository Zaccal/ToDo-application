import classes from './Sidebar.module.scss'
import editIcon from '../../../assets/icons/editing.png'
import TasksDirectory from '../../TasksDirectory/TasksDirectory'
// import editIconLightMode from '../../../assets/icons/editingLightMode.png'

const Sidebar = () => {
  return (
    <div style={{gridArea: 'sidebar'}} className={classes.sidebar}>
        <div className={classes.sidebarHeader}>
            <div className={classes.title}>
                <h1>ToDo</h1>
                <button className={classes.editBtn}>
                    <img src={editIcon} alt="editor title icon" />
                </button>
            </div>
            <input type="text" placeholder='Search' className={classes.search}/>
        </div>
        <div className={classes.sidebarContainer}>
          <div className={classes.taskLists}>
            <TasksDirectory />
          </div>
        </div>
    </div>
  )
}

export default Sidebar
