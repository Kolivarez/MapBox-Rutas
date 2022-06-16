import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1Ijoia29saXZhcmV6IiwiYSI6ImNsNGV0YjJzbDAwODgzYnFxcmx5c2c5bm8ifQ.tdC6TWc_YpnKuOJEHk_Wwg'
    }
})


export default directionsApi;