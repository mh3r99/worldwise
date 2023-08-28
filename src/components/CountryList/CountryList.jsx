import CountryItem from '../CountryItem/CountryItem';
import Spinner from '../Spinner/Spinner';
import Message from '../Message/Message';
import cls from './CountryList.module.css';
import { useCities } from '../../contexts/CitiesContext';

const CountryList = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return <Message message="Add your first city by clicking on a city on the map" />;
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else return arr;
  }, []);

  console.log(countries);

  return (
    <ul className={cls.countryList}>
      {countries.map((country) => (
        <CountryItem key={country} country={country} />
      ))}
    </ul>
  );
};

export default CountryList;
