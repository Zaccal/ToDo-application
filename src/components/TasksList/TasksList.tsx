import { useContext } from "react";
import TasksDerectoryIcon from "../../assets/icons/task.png";
import classes from "./TasksList.module.scss";
import Global from "../../context/Global";
import { ToDoTaskLists } from "../../types/interfaces";

interface TasksListProps {
  status: boolean;
  name: string;
  nameFileIcon?: string;
  id: number;
  sheetToСhange: 'defualtLists' | 'userLists';
}

const TasksList = ({status, name, nameFileIcon, id, sheetToСhange}: TasksListProps) => {
  const { setLocalStore, ToDoTasksListsUser, Settings, ToDoTaskListsDefualt } = useContext(Global);

  const resultCheckingIcon = () => {
    if (!!nameFileIcon || false) {
      return (
        <img src={`src/assets/icons/${nameFileIcon}`} alt="icon-list-tasks" />
      );
    }

    return <img src={TasksDerectoryIcon} alt="defualt-icon-list-tasks" />;
  };

  const disableAllToDoListsStatusActive = () => {
    const disabledStatusDefualtList = [...ToDoTaskListsDefualt].map(list => {
      list.status = false
      return list
    })
    
    const disabledStatusUserList = [...ToDoTasksListsUser].map(list => {
      list.status = false
      return list
    })

    return {disabledStatusDefualtList, disabledStatusUserList}
  }

  const changeTaskListStatus = () => {    
    const {disabledStatusDefualtList, disabledStatusUserList} = disableAllToDoListsStatusActive()

    if (sheetToСhange === 'defualtLists') {
      const changedStatusToDoLists = [...ToDoTaskListsDefualt].map(list => {
        if (list.id === id) {
          list.status = true
          return list
        }

        list.status = false 
        
        return list
      })


      setLocalStore({
        ToDoTaskListsDefualt: changedStatusToDoLists,
        ToDoTasksListsUser: disabledStatusUserList,
        Settings,
      })
    }

    else {
      const changedStatusToDoLists = ToDoTasksListsUser.filter((list) => {
        if (list.id === id) {
          list.status = true;
          return list
        }
        
        list.status = false
        return list;
      });

      setLocalStore({
        ToDoTasksListsUser: changedStatusToDoLists,
        ToDoTaskListsDefualt: disabledStatusDefualtList,
        Settings,
      })
    }
  };

  return (
    <div
      className={`${classes.directory} ${!status ? "" : classes.active}`}
      onClick={() => {
        changeTaskListStatus()
      }}
    >
      <div className={classes.container}>
        {resultCheckingIcon()}
        <p>{name}</p>
      </div>
    </div>
  );
};

export default TasksList;
