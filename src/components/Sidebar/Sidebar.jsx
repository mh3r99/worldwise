import { Outlet } from "react-router-dom"
import cls from "./Sidebar.module.css";
import Logo from "../Logo/Logo";
import AppNav from "../AppNav/AppNav";

const Sidebar = () => {
  return (
    <div className={cls.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={cls.footer}>
        <p className={cls.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  )
}

export default Sidebar