import { useState, KeyboardEvent, useContext } from "react";
import classes from "./AddTaskInput.module.scss";
import Input from "../../UI/Input/Input";
import Global from "../../context/Global";
import { ToDoTask } from "../../types/interfaces";
import useGetNowActiveTasksList from "../../hooks/useGetNowActiveTasksList";

const AddTaskInput = () => {
  const {LocalStore, setLocalStore} = useContext(Global) 
  const [newTaskValue, setNewTaskValue] = useState("");
  const nowActiveTaskList = useGetNowActiveTasksList()
  const addTaskHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    const key = event.key

    if (key === 'Enter' && event.currentTarget.value.length >= 1) {
      const newTask: ToDoTask = {
        title: newTaskValue,
        status: false,
        id: Date.now(),
      }

      const updatedTaskListAddedNewTask = LocalStore.ToDoTasksLists.map(taskList => {
        if (taskList.id === nowActiveTaskList.id) {
          taskList.tasks = [...taskList.tasks, newTask]
          return taskList
        }

        return taskList
      })

      setLocalStore({
        LocalStore: {
          ...LocalStore,
          ToDoTasksLists: updatedTaskListAddedNewTask,

        }
      })

      setNewTaskValue('')
    }
  }

  return (
    <div className={classes.Input}>
      <Input
        className="py-3 pl-11 rounded-lg"
        iconFileName="round.svg"
        value={newTaskValue}
        onChange={event => setNewTaskValue(event.target.value)}
        onKeyUp={event => addTaskHandler(event)}
        placeholder="Add task..."
      />
    </div>
  );
};

export default AddTaskInput;
