import cls from "./Button.module.css"

const Button = ({children, onClick, type }) => {
  return (
    <button onClick={onClick} className={`${cls.btn} ${cls[type]}`}>
    {children}
  </button>
  )
}

export default Button