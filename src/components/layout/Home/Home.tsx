import Sidebar from "../Sidebar/Sidebar"
import classes from './Home.module.scss'

const Home = () => {
  return (
    <div className={classes.layout}>
      <Sidebar />
    </div>
  )
}

export default Home
