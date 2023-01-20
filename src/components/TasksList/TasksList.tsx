import { useContext } from "react";
import TasksDerectoryIcon from "../../assets/icons/task.png";
import classes from "./TasksList.module.scss";
import Global from "../../context/Global";

interface TasksListProps {
  status: boolean;
  name: string;
  nameFileIcon?: string;
  id: number;
  sheetToСhange: 'defualtLists' | 'userLists';
}

const TasksList = ({status, name, nameFileIcon, id, sheetToСhange}: TasksListProps) => {
  const { setLocalStore, ToDoTasksListsUser, theme, ToDoTaskListsDefualt } = useContext(Global);

  const resultCheckingIcon = () => {
    if (!!nameFileIcon || false) {
      return (
        <img src={`src/assets/icons/${nameFileIcon}`} alt="icon-list-tasks" />
      );
    }

    return <img src={TasksDerectoryIcon} alt="defualt-icon-list-tasks" />;
  };

  const changeTaskListStatus = () => {
    const desiableAllListsStatusDefualtList = ToDoTaskListsDefualt.map(list => list.status = false)
    const desiableAllListsStatusUserList = ToDoTasksListsUser.map(list => list.status = false)

    setLocalStore({
      ToDoTaskListsDefualt: desiableAllListsStatusDefualtList,
      ToDoTasksListsUser: desiableAllListsStatusUserList,       
      theme,
    })

    if (sheetToСhange === 'defualtLists') {
      const changedStatusToDoLists = ToDoTaskListsDefualt.filter((list) => {
        if (list.id === id) {
          return (list.status = true);
        }
  
        return list;
      });

      setLocalStore({
        ToDoTaskListsDefualt: changedStatusToDoLists,
        theme,
        ToDoTasksListsUser,
      })
    }

    else {
      const changedStatusToDoLists = ToDoTasksListsUser.filter((list) => {
        if (list.id === id) {
          return (list.status = true);
        }
  
        return list;
      });

      setLocalStore({
        ToDoTasksListsUser: changedStatusToDoLists,
        theme,
        ToDoTaskListsDefualt,
      })
    }
  };

  return (
    <div
      className={`${classes.directory} ${!status ? "" : classes.active}`}
      onClick={changeTaskListStatus}
    >
      <div className={classes.container}>
        {resultCheckingIcon()}
        <p>{name}</p>
      </div>
    </div>
  );
};

export default TasksList;
