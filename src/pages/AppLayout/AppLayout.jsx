
import cls from "./AppLayout.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Map from "../../components/Map/Map";
import User from "../../components/User/User"

const AppLayout = () => {
  return (
    <div className={cls.app}>
    <Sidebar />
    <Map />
    <User />
  </div>
  )
}

export default AppLayout