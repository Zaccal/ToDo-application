import Modal from "../../components/Modal/Modal"
import { setStateHundler } from "../../types/types"

interface ModalAddTasksListProps {
    statusModal: boolean,
    handlerStatusModal: setStateHundler<boolean>
}

const ModalAddTasksList = ({statusModal, handlerStatusModal}: ModalAddTasksListProps) => {
    return (
    <Modal status={statusModal} statusHandler={handlerStatusModal}>
        
    </Modal>
    )
}

export default ModalAddTasksList