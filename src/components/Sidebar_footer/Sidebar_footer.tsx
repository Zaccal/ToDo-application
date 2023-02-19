import { setStateHundler } from '../../types/types'
import { useContext } from 'react';
import addIcon from '../../assets/icons/addIcon.svg'
import addIconLightMode from '../../assets/icons/addIconLightMode.svg'
import settingsIcon from '../../assets/icons/settings-icon.svg'
import settingsIconLightMode from '../../assets/icons/settingsLightMode.svg' 
import classes from './Sidebar_footer.module.scss'
import Global from '../../context/Global';
import { useNavigate } from 'react-router-dom';

const Sidebar_footer = ({modalAddTasksListStatusHandler}: {modalAddTasksListStatusHandler: setStateHundler<boolean>}) => {
  const {LocalStore} = useContext(Global)
  const navigate = useNavigate()

  return (
    <div className={classes.sidebarFooter}>
      <button className={classes.addTasksListButton} onClick={() => modalAddTasksListStatusHandler(true)}>
        {LocalStore.Settings.theme === 'dark' ? <img src={addIcon} alt="add-icon-img" /> : <img src={addIconLightMode} alt="add-icon-img" />}
        <span>Add new list</span>
      </button>
      <button className={classes.settings} onClick={() => navigate('/Settings')}>
        {LocalStore.Settings.theme === 'dark' ? <img src={settingsIcon} alt="setting-icon" /> : <img src={settingsIconLightMode} alt="setting-icon" />}
      </button>
    </div>
  );
};

export default Sidebar_footer;
