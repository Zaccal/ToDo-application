import { BrowserRouter } from "react-router-dom"
import RouterApp from "./components/Router/RouterApp"
import { Context } from "./types/interfaces"
import useLocalStore from "./components/hooks/useLocalStore"
import Global from "./context/Global"

function App() {
  const localStoreValue: Omit<Context, "setLocalStore"> = {
    ToDoTasksData: [],
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
