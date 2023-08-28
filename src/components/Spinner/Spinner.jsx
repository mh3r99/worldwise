import cls from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={cls.spinnerContainer}>
      <div className={cls.spinner}></div>
    </div>
  )
}

export default Spinner