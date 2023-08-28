import cls from './CityList.module.css';
import CityItem from '../CityItem/CityItem';
import Spinner from '../Spinner/Spinner';
import Message from '../Message/Message';
import { useCities } from '../../contexts/CitiesContext';

const CityList = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length)
    return <Message message="Add your first city by clicking on a city on the map" />;

  return (
    <ul className={cls.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default CityList;
