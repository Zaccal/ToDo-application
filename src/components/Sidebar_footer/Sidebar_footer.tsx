import addIcon from '../../assets/icons/addIcon.png'
import addIconLightMode from '../../assets/icons/addIconLightMode.png'
import classes from './Sidebar_footer.module.scss'

const Sidebar_footer = () => {
  return (
    <div className={classes.sidebarFooter}>
      <button className={classes.addTasksListButton}>
        <img src={addIcon} alt="add-icon-img" />
        <span>Add new list</span>
      </button>
      <button className={classes.settings}></button>
    </div>
  );
};

export default Sidebar_footer;
