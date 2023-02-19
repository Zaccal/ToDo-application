import { ReactNode, HtmlHTMLAttributes, useEffect, useState } from "react"
import { isString } from "../../types/guards";

interface ContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
    children?: ReactNode,
    center?: boolean,
    maxWidth?: string;
}

const Container = ({className, children, center, maxWidth, ...props}: ContainerProps) => {
  let [maxWidthNowSize, setMaxWidthNowSize] = useState<string>('947')
  
  useEffect(() => {
    if (isString(maxWidth)) {
      setMaxWidthNowSize(maxWidth)
    }
  }, [maxWidth])

  return (
    <div {...props} style={{
      maxWidth: `${maxWidthNowSize}px`,
      ...props.style
    }} className={`${className} ${center ? 'mx-auto' : ''}`}>{children}</div>
  )
}

export default Container