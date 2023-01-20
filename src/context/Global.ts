import { createContext } from "react";
import { Context } from "../types/interfaces";

const defaltValueContext: Context = {
    ToDoTaskListsDefualt: [],
    ToDoTasksListsUser: [],
    theme: 'dark',
    setLocalStore: () => undefined
}

const Global = createContext<Context>(defaltValueContext)

export default Global