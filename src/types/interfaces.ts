import { ReactNode } from "react"

export interface ToDoTask {
    status: boolean,
    title: string,
    description: string,
    id: number,
}

export interface ToDoTaskLists {
    nameList: string,
    icon?: '../assets/icons/clipboard.png' | string,
    tasks: ToDoTask[],
    status: boolean,
    id: number
}

export interface Context {
    ToDoTasksListsUser: ToDoTaskLists[],
    ToDoTaskListsDefualt: ToDoTaskLists[],
    theme: 'dark' | 'light',
    setLocalStore: (newVlaue: Omit<Context, "setLocalStore">) => void
}

export interface RouteData {
    path: string,
    element: ReactNode | undefined | null | boolean,
    id: number,
}