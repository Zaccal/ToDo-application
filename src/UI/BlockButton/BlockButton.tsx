import { ReactNode, MouseEvent } from "react"
import classes from './BlockButton.module.scss'

interface BlockButtonProps {
    children?: ReactNode | string | undefined | null | boolean
    className?: string,
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void
}

const BlockButton = ({children, className, onClick}: BlockButtonProps) => {
  return (
    <button onClick={onClick} className={`${className} ${classes.Button}`}>
        {children}
    </button>
  )
}

export default BlockButton