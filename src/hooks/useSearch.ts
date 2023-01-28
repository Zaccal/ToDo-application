import { ToDoTask } from '../types/interfaces';
import { useMemo } from 'react';

interface useSearchArgs {
    forSearchItems: ToDoTask[],
    searchParam: string,
}

const useSearch = ({forSearchItems, searchParam}: useSearchArgs) => {
    let result;
    result = useMemo(() => {
        return forSearchItems.filter(item => item.title.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase()))
    }, [forSearchItems, searchParam])

    return result
}

export default useSearch