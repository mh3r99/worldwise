
import { NavLink } from "react-router-dom";
import cls from "./AppNav.module.css";

const AppNav = () => {
  return (
    <nav className={cls.nav}>
    <ul>
      <li>
        <NavLink to="cities">Cities</NavLink>
      </li>
      <li>
        <NavLink to="countries">Countries</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default AppNav