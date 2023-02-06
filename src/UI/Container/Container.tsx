import { ReactNode, HtmlHTMLAttributes, FunctionComponent } from "react"

interface ContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
    children?: ReactNode,
    center?: boolean
}

const Container = ({className, children, center, ...props}: ContainerProps) => {
  return (
    <div {...props} className={`${className} max-w-[947px] ${center ? 'mx-auto' : ''}`}>{children}</div>
  )
}

export default Container