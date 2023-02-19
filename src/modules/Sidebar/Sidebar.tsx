import { KeyboardEvent, FocusEvent } from "react";
import classes from "./Sidebar.module.scss";
import editIcon from "../../assets/icons/editing.svg";
import editIconLightMode from "../../assets/icons/editingLightMode.svg";
import { useContext, useState } from "react";
import Global from "../../context/Global";
import List from "../../components/List/List";
import TasksList from "../../components/TasksList/TasksList";
import Input from "../../UI/Input/Input";
import Sidebar_footer from "../../components/Sidebar_footer/Sidebar_footer";
import EditInput from "../../UI/EditInput/EditInput";
import { setStateHundler } from "../../types/types";
import Line from "../../UI/Line/Line";

const Sidebar = ({modalAddTasksListHandler}: {modalAddTasksListHandler: setStateHundler<boolean>}) => {
  const { LocalStore, setLocalStore } = useContext(Global);
  const [searchInput, setSearchInput] = useState<string>("");
  const [changeTitleStatus, setChangeTitleStatus] = useState<boolean>(false);

  function pressKeyForChangeTitleStatus(event: KeyboardEvent<HTMLInputElement>) {
    const key = event.key;

    if (key === "Enter" || key === "Escape" && event.currentTarget.value.length > 1) {      
      setChangeTitleStatus(false)
    } 
    
    else {
      // Alert error
      return undefined;
    }
  };

  return (
    <div style={{ gridArea: "sidebar" }} className={classes.sidebar}>
      <div className={classes.sidebarHeader}>
        <div className={classes.title}>
          {changeTitleStatus ? ( 
            <EditInput
              value={LocalStore.Settings.headerTitle}
              onBlur={(event: FocusEvent<HTMLInputElement>) => event.target.value.length > 1 && setChangeTitleStatus(false)}
              onKeyUp={(event) => pressKeyForChangeTitleStatus(event)}
              autoFocus
              onChange={(event) =>
                setLocalStore({
                  LocalStore: {
                    ...LocalStore,
                    Settings: { ...LocalStore.Settings, headerTitle: event.target.value },
                  }
                })
              }
            />
          ) : (
            <h1>{LocalStore.Settings.headerTitle}</h1>
          )}

          <button className={classes.editBtn}>
            {LocalStore.Settings.theme === "dark" ? (
              <img
                src={editIcon}
                alt="editor title icon"
                onClick={() => setChangeTitleStatus(true)}
              />
            ) : (
              <img
                src={editIconLightMode}
                alt="editor title icon"
                onClick={() => setChangeTitleStatus(true)}
              />
            )}
          </button>
        </div>
        <Input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          iconFileName="search.svg"
          className="mt-7"
        />
      </div>
      <div className={classes.taskLists}>
        <List
          items={LocalStore.ToDoTasksLists}
          renderItem={(item) => {
            return (
              <TasksList
                status={item.status}
                name={item.nameList}
                nameFileIcon={item.icon}
                id={item.id}
                key={item.id}
              />
            );
          }}
          limit={3}
        />

        <Line/>

        <List
          items={LocalStore.ToDoTasksLists}
          renderItem={(item) => {
            return (
              <TasksList
                status={item.status}
                name={item.nameList}
                nameFileIcon={item.icon}
                id={item.id}
                key={item.id}
              />
            );
          }}
          startWith={3}
        />

        <Sidebar_footer modalAddTasksListStatusHandler={modalAddTasksListHandler}/>
      </div>
    </div>
  );
};

export default Sidebar;
