import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'

const RouterApp = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
    </Routes>
  )
}

export default RouterApp