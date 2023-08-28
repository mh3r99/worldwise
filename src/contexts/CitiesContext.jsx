import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext=createContext();

const URL = `http://localhost:9000`;


function CitiesProvider({children}){
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity]=useState({});


  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (e) {
        alert('There was an error loading data...');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);


  async function getCity(id){
      try {
        setIsLoading(true);
        const res = await fetch(`${URL}/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data);
      } catch (e) {
        alert('There was an error loading data...');
      } finally {
        setIsLoading(false);
      }
  }

  async function createCity(newCity){
    try {
      setIsLoading(true);
      const res = await fetch(`${URL}/cities`, {
        method:'POST',
        body: JSON.stringify(newCity),
        headers:{
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setCities(cities=>[...cities, data])
    } catch (e) {
      alert('There was an error creating city.');
    } finally {
      setIsLoading(false);
    }
}

async function deleteCity(id){
  try {
    setIsLoading(true);
    await fetch(`${URL}/cities/${id}`, {
      method:'DELETE',
    });
    setCities(cities=>cities.filter(city=>city.id!==id))
  } catch (e) {
    alert('There was an error deleting city.');
  } finally {
    setIsLoading(false);
  }
}

  return <CitiesContext.Provider value={{
    cities, isLoading, currentCity, getCity, createCity,deleteCity
  }}>
    {children}
  </CitiesContext.Provider>
}

function useCities(){
  const context=useContext(CitiesContext);

  if(!context) throw new Error('CitiesContext was used outside the CitiesProvider');
  
  return context
}

export {CitiesProvider, useCities}