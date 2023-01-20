import { BrowserRouter } from "react-router-dom"
import RouterApp from "./components/Router/RouterApp"
import { Context } from "./types/interfaces"
import useLocalStore from "./components/hooks/useLocalStore"
import Global from "./context/Global"

function App() {
  // ! Only one task list can be status true 
  const localStoreValue: Omit<Context, "setLocalStore"> = {
    ToDoTasksListsUser: [
      {
        nameList: 'Getting started',
        icon: 'work.png',
        tasks: [],
        status: false,
        id: 1,
      },
      {
        nameList: 'Products',
        icon: 'products.png',
        tasks: [],
        status: false,
        id: 2,
      }
    ],
    ToDoTaskListsDefualt: [
      {
        nameList: 'My day',
        icon: 'sunny.png',
        tasks: [],
        status: true,
        id: 1,
      },
      {
        nameList: 'Important',
        icon: 'danger.png',
        tasks: [],
        status: false,
        id: 2,
      },
      {
        nameList: 'Tasks',
        icon: 'clipboard.png',
        tasks: [],
        status: false,
        id: 3,
      }
    ],
    theme: 'dark',
  } 

  const [ localStore, setLocalStore ] = useLocalStore('Data', localStoreValue)


  return (
    <Global.Provider value={{...localStore, setLocalStore}}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </Global.Provider>
  )
}

export default App
