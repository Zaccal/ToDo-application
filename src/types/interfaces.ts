import { ReactNode } from "react"

export interface ToDoTask {
    status: boolean,
    title: string,
    description: string,
    id: number,
}

export interface Context<T = (newVlaue: any) => void> {
    ToDoTasksData: ToDoTask[]
    theme: 'dark' | 'light',
    setLocalStore: T
}

export interface RouteData {
    path: string,
    element: ReactNode | undefined | null | boolean,
    id: number,
}