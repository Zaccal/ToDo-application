import { useContext } from 'react'
import classes from './ButtonBack.module.scss'
import Global from '../../context/Global'
import { useNavigate } from 'react-router-dom'

interface ButtonBackProps {
    path: string,
    width?: number | string,
    height?: number | string,
    className?: string, 
}

const ButtonBack = ({path, width, height, className}: ButtonBackProps) => {
    const {LocalStore} = useContext(Global)
    const colorBorder = LocalStore.Settings.theme === 'dark' ? 'white' : 'black'
    const navigate = useNavigate()

    return (
        <button  
        onClick={() => navigate(path)} 
        style={{
            border: '2px solid ' + colorBorder,
            width: `${width}px`,
            height: `${height}px`
        }} 
        className={`${className} ${classes.button}`
        }>
            <img src="/src/assets/icons/back.svg" alt="backIcon" />
        </button>
    )
}

export default ButtonBack