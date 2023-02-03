import { useContext, useState } from "react"
import Input from "../../UI/Input/Input"
import Modal from "../../components/Modal/Modal"
import { setStateHundler } from "../../types/types"
import Global from "../../context/Global"
import BlockButton from "../../UI/BlockButton/BlockButton"
import { ToDoTaskLists } from "../../types/interfaces"

interface ModalAddTasksListProps {
    statusModal: boolean,
    handlerStatusModal: setStateHundler<boolean>
}

const ModalAddTasksList = ({statusModal, handlerStatusModal}: ModalAddTasksListProps) => {
    const {Settings, ToDoTasksListsUser, ToDoTaskListsDefualt, setLocalStore} = useContext(Global)
    const ICON_FOR_INPUT = Settings.theme === 'dark' ? 'task.png' : 'taskLightMode.png'
    
    const [listName, setListName] = useState('')

    const createNewList = () => {
        const newList: ToDoTaskLists = {
            nameList: listName,
            tasks: [],
            status: false,
            id: Date.now(),
        }

        setLocalStore({
            Settings,
            ToDoTaskListsDefualt,
            ToDoTasksListsUser: [...ToDoTasksListsUser, newList],
        })

        setListName('')
    }

    return (
    <Modal status={statusModal} statusHandler={handlerStatusModal}>
        <label htmlFor="listNameLabel">List name:</label>
        <Input 
        value={listName}
        onChange={event => setListName(event.target.value)}
        onKeyUp={event => event.key === 'Enter' ? createNewList() : undefined}
        type='text' 
        name="listNameLabel"
        placeholder="Press enter..." 
        className="mb-0 mt-3" 
        iconFileName={ICON_FOR_INPUT}
        autoFocus
        />
        <BlockButton onClick={() => createNewList()} className="mt-4">Create new list</BlockButton>
    </Modal>
    )
}

export default ModalAddTasksList