import Spinner from "../Spinner/Spinner"
import cls from "./SpinnerFullPage.module.css"

const SpinnerFullPage = () => {
  return (
    <div className={cls.spinnerFullpage}>
      <Spinner/>
  </div>
  )
}

export default SpinnerFullPage