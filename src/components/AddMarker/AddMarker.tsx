// @ts-ignore
import PropTypes from 'prop-types';
import { Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

const icon: L.DivIcon = L.divIcon({
  className: "hot-chocolate-icon",
  iconSize: [30, 30],
  iconAnchor: [0, 0],
  popupAnchor: [15, 0],
});

const AddMarker = ({ position, setPosition, setFormShown }) => {
  useMapEvents({
    click: (e) => {
      setPosition(e.latlng); // 👈 add marker
      setFormShown(true);
      console.log(e.latlng);
      /* CODE TO ADD NEW PLACE TO STORE (check the source code) */
    },
  });

  return position === null ? null : (<Marker icon={icon} position={position}></Marker>);
};

AddMarker.propTypes = {
  // TODO: fix prop-types
  position: PropTypes.any,
  setPosition: PropTypes.func.isRequired,
  setFormShown: PropTypes.func.isRequired,
};

AddMarker.defaultProps = {
  position: null,
};

export default AddMarker;


