import { createContext } from "react";
import { Context } from "../types/interfaces";

const defaltValueContext: Context = {
    LocalStore: {
        Settings: {
            headerTitle: '',
            theme: 'dark',
        },
        ToDoTasksLists: [],
    },
    setLocalStore: () => undefined
}

const Global = createContext<Context>(defaltValueContext)

export default Global