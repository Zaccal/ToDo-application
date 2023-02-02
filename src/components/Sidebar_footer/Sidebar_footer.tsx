import { setStateHundler } from '../../types/types'
import { useContext } from 'react';
import addIcon from '../../assets/icons/addIcon.png'
import addIconLightMode from '../../assets/icons/addIconLightMode.png'
import settingsIcon from '../../assets/icons/settings-icon.svg'
import settingsIconLightMode from '../../assets/icons/settingsLightMode.png' 
import classes from './Sidebar_footer.module.scss'
import Global from '../../context/Global';

const Sidebar_footer = ({modalAddTasksListStatusHandler}: {modalAddTasksListStatusHandler: setStateHundler<boolean>}) => {
  const {Settings} = useContext(Global)

  return (
    <div className={classes.sidebarFooter}>
      <button className={classes.addTasksListButton} onClick={() => modalAddTasksListStatusHandler(true)}>
        {Settings.theme === 'dark' ? <img src={addIcon} alt="add-icon-img" /> : <img src={addIconLightMode} alt="add-icon-img" />}
        <span>Add new list</span>
      </button>
      <button className={classes.settings}>
        {Settings.theme === 'dark' ? <img src={settingsIcon} alt="setting-icon" /> : <img src={settingsIconLightMode} alt="setting-icon" />}
      </button>
    </div>
  );
};

export default Sidebar_footer;
