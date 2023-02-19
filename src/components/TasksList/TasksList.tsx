import { useContext } from "react";
import TasksDerectoryIcon from "../../assets/icons/task.svg";
import classes from "./TasksList.module.scss";
import Global from "../../context/Global";

interface TasksListProps {
  status: boolean;
  name: string;
  nameFileIcon?: string;
  id: number;
}

const TasksList = ({status, name, nameFileIcon, id}: TasksListProps) => {
  const { setLocalStore, LocalStore } = useContext(Global);

  const resultCheckingIcon = () => {
    if (!!nameFileIcon || false) {
      return (
        <img src={`src/assets/icons/${nameFileIcon}`} alt="icon-list-tasks" />
      );
    }

    return <img src={TasksDerectoryIcon} alt="defualt-icon-list-tasks" />;
  };

  const changeTaskListStatus = () => {    
    const changedStatusTasksList = LocalStore.ToDoTasksLists.map(tasksList => {
      if (id === tasksList.id) {
        tasksList.status = true
        return tasksList
      }

      tasksList.status = false 
      return tasksList
    })

    setLocalStore({
      LocalStore: {
        ...LocalStore,
        ToDoTasksLists: changedStatusTasksList
      }
    })
  };

  return (
    <div
      className={`${classes.directory} ${!status ? "" : classes.active}`}
      onClick={() => {
        changeTaskListStatus()
      }}
    >
      <div title={name} className={classes.container}>
        {resultCheckingIcon()}
        <p>{name}</p>
      </div>
    </div>
  );
};

export default TasksList;
