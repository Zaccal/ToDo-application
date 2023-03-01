import { useMemo } from 'react';
import { ToDoTask } from "../types/interfaces"

type sortTypeTypes = 'status' | 'title' | 'description'

const useSortTasks = (tasks: ToDoTask[], sortType: sortTypeTypes): ToDoTask[] => {
    let sortedTasks = useMemo(() => {
        switch (sortType) {
            case 'status':
                return tasks.sort((firstTask, nextTask) => Number(firstTask.status) - Number(nextTask.status));
                break
            case 'title':
                return tasks.sort((firstTask, nextTask) => firstTask.title.localeCompare(nextTask.title))
                break
            case 'description':
                return tasks.sort((firstTask, nextTask) => {
                    if (firstTask.description && nextTask.description) {
                        return firstTask.description.localeCompare(nextTask.description)
                    }
                    else if (firstTask.description) {
                        return -1
                    } 
                    
                    return -1
                })          
                break     
        }
    }, [tasks])

    return sortedTasks
}

export default useSortTasks