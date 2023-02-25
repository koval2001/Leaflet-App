// @ts-ignore
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import AddMarker from '../AddMarker';
import Form from '../Form';
import { HotChocolate } from '../../domain/domain';
import list from '../../constants/list';
import './style.css';

const icon: L.DivIcon = L.divIcon({
  className: "hot-chocolate-icon",
  iconSize: [30, 30],
  iconAnchor: [0, 0],
  popupAnchor: [15, 0],
});

const position: LatLngExpression = [59.91174337077401, 10.750425582038146];
const zoom: number = 15;

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState<LatLngExpression | null>(null);
  const [isFormShown, setFormShown] = useState(false);
  const [locationList, setLocationList] = useState<HotChocolate[]>(list);

  const handleUpdateList = (values) => {
    // @ts-ignore
    const { lat, lng: lon } = currentPosition;

    const addedLocation = { lat, lon, ...values};
    setLocationList((prev) => [...prev, addedLocation]);
    setFormShown(false);
  }

  return (
    <div>
      <MapContainer style={{height: '100vh', width: '100wh'}} center={position} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locationList.map((item, index) => (
            <Marker
                icon={icon}
                key={index}
                position={[item.lat, item.lon]}
                title={`${item.englishProductName} at ${item.vendor}`}
            >
              <Popup>
                <strong>
                  {item.englishProductName} at {item.vendor}
                </strong>
                <br />
                <p>
                  Look for <strong>{item.productName}</strong> on the menu.
                </p>
                <p>{item.location}</p>
                {item.description && <em>{item.description}</em>}
              </Popup>
            </Marker>
        ))}

        <AddMarker
          position={currentPosition}
          setPosition={setCurrentPosition}
          setFormShown={setFormShown}
        />
      </MapContainer>

      {isFormShown && (<Form handleUpdateList={handleUpdateList} />)}
    </div>
  );
};

export default Map;
