import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import { RoutesData } from './RoutesData'

const RouterApp = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        {RoutesData.map(route => {
          return <Route path={route.path} element={route.element} key={route.id}/>
        })}
    </Routes>
  )
}

export default RouterApp