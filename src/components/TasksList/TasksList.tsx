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
  const { setLocalStore, LocalStore } = useContext(Global);

  const resultCheckingIcon = () => {
    if (!!nameFileIcon || false) {
      return (
        <img src={`src/assets/icons/${nameFileIcon}`} alt="icon-list-tasks" />
      );
    }

    return <img src={TasksDerectoryIcon} alt="defualt-icon-list-tasks" />;
  };

  // ToDo: changed code and  optimize
  const disableAllToDoListsStatusActive = () => {
    const disabledStatusDefualtList = [...LocalStore.ToDoTaskListsDefualt].map(list => {
      list.status = false
      return list
    })
    
    const disabledStatusUserList = [...LocalStore.ToDoTasksListsUser].map(list => {
      list.status = false
      return list
    })

    return {disabledStatusDefualtList, disabledStatusUserList}
  }

  const changeTaskListStatus = () => {    
    const {disabledStatusDefualtList, disabledStatusUserList} = disableAllToDoListsStatusActive()

    if (sheetToСhange === 'defualtLists') {
      const changedStatusToDoLists = [...LocalStore.ToDoTaskListsDefualt].map(list => {
        if (list.id === id) {
          list.status = true
          return list
        }

        list.status = false 
        
        return list
      })


      setLocalStore({
        LocalStore: {
          ...LocalStore,
          ToDoTaskListsDefualt: changedStatusToDoLists,
          ToDoTasksListsUser: disabledStatusUserList,
        }
      })
    }

    else {
      const changedStatusToDoLists = LocalStore.ToDoTasksListsUser.filter((list) => {
        if (list.id === id) {
          list.status = true;
          return list
        }
        
        list.status = false
        return list;
      });

      setLocalStore({
        LocalStore: {
          ...LocalStore,
          ToDoTasksListsUser: changedStatusToDoLists,
          ToDoTaskListsDefualt: disabledStatusDefualtList,
        }
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
      <div title={name} className={classes.container}>
        {resultCheckingIcon()}
        <p>{name}</p>
      </div>
    </div>
  );
};

export default TasksList;
