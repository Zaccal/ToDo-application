import { ReactNode } from "react"

export interface ToDoTask {
    status: boolean,
    title: string,
    description?: string,
    id: number,
}

export interface ToDoTaskLists {
    nameList: string,
    icon?: string,
    tasks: ToDoTask[],
    status: boolean,
    background: string | null; 
    id: number,
}

export interface SettingsData {
    headerTitle: string,
    theme: 'dark' | 'light',
}

interface LocalStore {
    ToDoTasksLists: ToDoTaskLists[]
    Settings: SettingsData, 
}

export interface Context {
    LocalStore: LocalStore
    setLocalStore: (newVlaue: Omit<Context, "setLocalStore">) => void
}

export interface RouteData {
    path: string,
    element: ReactNode | undefined | null | boolean,
    id: number,
}