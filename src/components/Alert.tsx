import { ReactNode } from "react"

// interface to define the shape of props
interface Props {
  children: ReactNode
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>
}

export default Alert
