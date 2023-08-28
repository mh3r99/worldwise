import { NavLink } from "react-router-dom"
import cls from "./PageNav.module.css"
import Logo from "../Logo/Logo"

const PageNav = () => {
  return (
    <nav className={cls.nav}>
    <Logo/>

    <ul>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="/product">Product</NavLink>
      </li>
      <li>
        <NavLink to="/login" className={cls.ctaLink}>
          Login
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default PageNav