import { useNavigate } from 'react-router-dom';
import cls from './Map.module.css';
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import { useCities } from '../../contexts/CitiesContext';
import { useEffect } from 'react';
import { useGeolocation } from '../../hooks/useGeolocation';
import { useUrlPosition } from '../../hooks/useUrlPosition';
import Button from '../Button/Button';

const Map = () => {
  const { cities } = useCities();
  const [mapLat, mapLng] = useUrlPosition();

  const [mapPosition, setMapPosition] = useState([40, 0]);

  const { isLoading: isLoadingPosition, position: geoPosition, getPosition } = useGeolocation();

  useEffect(() => {
    if (mapLat && mapLng) {
      setMapPosition([mapLat, mapLng]);
    }
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geoPosition) {
      setMapPosition([geoPosition.lat, geoPosition.lng]);
    }
  }, [geoPosition]);

  return (
    <div className={cls.mapContainer}>
      {!geoPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? ' Loading...' : 'Use your position'}
        </Button>
      )}
      <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true} className={cls.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker key={city.id} position={[city.position.lat, city.position.lng]}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
  return null;
}

export default Map;
