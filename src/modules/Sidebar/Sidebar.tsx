import { KeyboardEvent, FocusEvent } from "react";
import classes from "./Sidebar.module.scss";
import editIcon from "../../assets/icons/editing.png";
import editIconLightMode from "../../assets/icons/editingLightMode.png";
import { useContext, useState } from "react";
import Global from "../../context/Global";
import List from "../../components/List/List";
import TasksList from "../../components/TasksList/TasksList";
import Input from "../../UI/Input/Input";
import Sidebar_footer from "../../components/Sidebar_footer/Sidebar_footer";
import EditInput from "../../UI/EditInput/EditInput";
import { setStateHundler } from "../../types/types";

const Sidebar = ({modalAddTasksListHandler}: {modalAddTasksListHandler: setStateHundler<boolean>}) => {
  const { Settings, ToDoTaskListsDefualt, ToDoTasksListsUser, setLocalStore } = useContext(Global);
  const [searchInput, setSearchInput] = useState<string>("");
  const [changeTitleStatus, setChangeTitleStatus] = useState<boolean>(false);

  function pressKeyForChangeTitleStatus<T>(event: KeyboardEvent<HTMLInputElement>, callback: Function | T) {
    const key = event.key;

    if (key === "Enter" || key === "Escape") {
      event.currentTarget.value.length > 1 && callback;
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
              value={Settings.headerTitle}
              onBlur={(event: FocusEvent<HTMLInputElement>) => event.target.value.length > 1 && setChangeTitleStatus(false)}
              onKeyUp={(event) => pressKeyForChangeTitleStatus(event, setChangeTitleStatus(false))}
              autoFocus
              onChange={(event) =>
                setLocalStore({
                  ToDoTaskListsDefualt,
                  ToDoTasksListsUser,
                  Settings: { ...Settings, headerTitle: event.target.value },
                })
              }
            />
          ) : (
            <h1>{Settings.headerTitle}</h1>
          )}

          <button className={classes.editBtn}>
            {Settings.theme === "dark" ? (
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
          items={ToDoTaskListsDefualt}
          renderItem={(item) => {
            return (
              <TasksList
                sheetToСhange="defualtLists"
                status={item.status}
                name={item.nameList}
                nameFileIcon={item.icon}
                id={item.id}
                key={item.id}
              />
            );
          }}
        />

        <div className={classes.line}></div>

        <List
          items={ToDoTasksListsUser}
          renderItem={(item) => {
            return (
              <TasksList
                sheetToСhange="userLists"
                status={item.status}
                name={item.nameList}
                nameFileIcon={item.icon}
                id={item.id}
                key={item.id}
              />
            );
          }}
        />

        <Sidebar_footer modalAddTasksListStatusHandler={modalAddTasksListHandler}/>
      </div>
    </div>
  );
};

export default Sidebar;
