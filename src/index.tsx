import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';



import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1Ijoia29saXZhcmV6IiwiYSI6ImNsNDgyc245ajBuc2EzanFpaTUybG5hcDIifQ.LuxxEto7ZvHMujx1jZmDmQ';


if (!navigator.geolocation) {
  alert('tu navegador no tiene opcion de geolocation');
  throw new Error('tu navegador no tiene opcion de geolocation');
  
  
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
