import { useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import countries from '../../constants/countries.json';
import colors from '../../constants/colors';

const dataScope = {
  name: "Population",
  key: "pop_est",
  description: "The population of the country",
  unit: "",
  scale: [0, 5000000, 10000000, 25000000, 50000000, 75000000, 100000000, 200000000, 1000000000, 8000000000]
};

const CountryBoundaryMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const highlightFeature = (e) => {
    let layer = e.target;
    setHoveredCountry(layer.feature.properties);
  }

  const resetHighlight = (e) => {
    setHoveredCountry(null);
  }

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: () => console.log(feature.properties)
    });
  }

  const getColor = (val) => {
    for (let i = 1; i < dataScope.scale.length; i++) {
      if (val < dataScope.scale[i]) {
        return colors[i - 1];
      }
    }

    return colors[colors.length - 1];
  }

  const style = (feature) => {
    let mapStyle = {
      fillColor: getColor(feature.properties[dataScope.key]),
      weight: 1,
      opacity: 1,
      color: '#888',
      dashArray: '3',
      fillOpacity: 0.7
    };

    // @ts-ignore
    if (hoveredCountry && feature.properties.iso_a3 === hoveredCountry.iso_a3) {
      mapStyle.color = '#444';
      mapStyle.weight = 2;
    }

    return mapStyle;
  };

  return (
    <>
      {/* @ts-ignore */}
      <GeoJSON data={countries} style={style} onEachFeature={onEachFeature} />
    </>
  );
};

export default CountryBoundaryMap;
