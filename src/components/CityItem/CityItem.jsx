import { Link } from "react-router-dom";
import cls from "./CityItem.module.css"
import { useCities } from "../../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({city}) => {
  const {currentCity}=useCities();
  const {cityName, emoji, date, id, position}=city;

  return (
    <li >
    <Link className={`${cls.cityItem} ${id===currentCity.id ? cls['cityItem--active'] : ''}`} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
      <span className={cls.emoji}>{emoji}</span>
        <h3 className={cls.name}>{cityName}</h3>
        <time className={cls.date}>({formatDate(date)})</time>
        <button className={cls.deleteBtn} >
          &times;
        </button>
    </Link>
    </li>

  )
}

export default CityItem