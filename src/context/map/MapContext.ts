import { createContext } from "react";
import mapboxgl, { Map } from "mapbox-gl";


interface MapContextProps {
    isMapReady: boolean;
    map?: Map


    //Metodos
    setMap: ( map: Map)=> void

}





export const MapContext = createContext({} as MapContextProps);