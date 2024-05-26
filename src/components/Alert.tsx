import { ReactNode } from "react"

// interface to define the shape of props
interface Props {
  children: ReactNode
  onClose: () => void
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismess="alert"
      ></button>
    </div>
  )
}

export default Alert
