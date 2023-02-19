import { useContext, useMemo } from 'react';
import { ToDoTaskLists } from './../types/interfaces';
import Global from '../context/Global';

const useGetNowActiveTasksList = () => {
    const {LocalStore} = useContext(Global)
 
    const nowActiveTasksList: ToDoTaskLists = useMemo(() => {
        return LocalStore.ToDoTasksLists.find(tasksList => tasksList.status === true)!
    }, [LocalStore.ToDoTasksLists]) 


    return nowActiveTasksList!
}

export default useGetNowActiveTasksList