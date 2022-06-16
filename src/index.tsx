import React from 'react';
import { createRoot } from 'react-dom/client';
import { MapsApp } from './MapsApp';


//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1Ijoia29saXZhcmV6IiwiYSI6ImNsNGV0YjJzbDAwODgzYnFxcmx5c2c5bm8ifQ.tdC6TWc_YpnKuOJEHk_Wwg';


if (!navigator.geolocation) {
  alert('tu navegador no tiene opcion de geolocation');
  throw new Error('tu navegador no tiene opcion de geolocation');
  
  
}


createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <MapsApp />
</React.StrictMode>,
);