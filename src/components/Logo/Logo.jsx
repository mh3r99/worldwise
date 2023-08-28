import { Link } from "react-router-dom"
import cls from "./Logo.module.css"

const Logo = () => {
  return (
    <Link to="/">
      <img src="/logo.png" alt="WorldWise logo" className={cls.logo} />
    </Link>
  )
}

export default Logo