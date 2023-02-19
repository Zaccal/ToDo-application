import { ToDoTask } from "./interfaces";

export function isString(value: any): value is string {
    return typeof(value) === 'string'
}

export function isFromToDoTaskListsUser(Task: ToDoTask) {
    
}