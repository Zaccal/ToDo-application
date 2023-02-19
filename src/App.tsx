import { BrowserRouter } from "react-router-dom"
import RouterApp from "./Router/RouterApp"
import { Context } from "./types/interfaces"
import useLocalStore from "./hooks/useLocalStore"
import Global from "./context/Global"

function App() {
  // ! Only one task list can be status true and allways have ONE tasks list with status true 
  const localStoreValue: Omit<Context, "setLocalStore"> = {
    LocalStore: {
      Settings: {
        headerTitle: 'ToDo',
        theme: 'dark',
      },
      ToDoTasksLists: [
        {
          nameList: 'My day',
          icon: 'sunny.svg',
          tasks: [],
          status: true,
          background: null,
          id: 3,
        },
        {
          nameList: 'Important',
          icon: 'danger.svg',
          tasks: [],
          status: false,
          background: null,
          id: 4,
        },
        {
          nameList: 'Tasks',
          icon: 'clipboard.svg',
          tasks: [],
          status: false,
          background: null,
          id: 5,
        },
        {
          nameList: 'Getting started',
          icon: 'work.svg',
          tasks: [{
            title: 'Something .... omsthign saokdw adiqjwd',
            id: 1,
            status: false,
          }],
          status: false,
          background: null,
          id: 1,
        },
        {
          nameList: 'Products',
          icon: 'products.svg',
          tasks: [],
          status: false,
          background: null,
          id: 2,
        },
      ],
    }
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
