import { createContext } from "react";
import { Context } from "../types/interfaces";

const defaltValueContext: Context = {
    Settings: {
        headerTitle: '',
        theme: 'dark',
    },
    ToDoTaskListsDefualt: [],
    ToDoTasksListsUser: [],
    setLocalStore: () => undefined
}

const Global = createContext<Context>(defaltValueContext)

export default Global