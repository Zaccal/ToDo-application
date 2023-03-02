import classes from "./Sidebar.module.scss";
import { useContext, useState } from "react";
import Global from "../../context/Global";
import List from "../../components/List/List";
import TasksList from "../../components/TasksList/TasksList";
import Input from "../../UI/Input/Input";
import Sidebar_footer from "../../components/Sidebar_footer/Sidebar_footer";
import { setStateHundler } from "../../types/types";
import Line from "../../UI/Line/Line";
import SidebarTitle from "../../components/SidebarTitle/SidebarTitle";

const Sidebar = ({modalAddTasksListHandler}: {modalAddTasksListHandler: setStateHundler<boolean>}) => {
  const { LocalStore } = useContext(Global);
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <div style={{ gridArea: "sidebar" }} className={classes.sidebar}>
      <div className={classes.sidebarHeader}>
        <SidebarTitle />
        <Input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          iconFileName="search.svg"
          className="mt-6"
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
