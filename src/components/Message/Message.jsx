import cls from "./Message.module.css";


const Message = ({message}) => {
  return (
    <p className={cls.message}>
    <span role="img">👋</span> {message}
  </p>
  )
}

export default Message