import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1Ijoia29saXZhcmV6IiwiYSI6ImNsNGV0YjJzbDAwODgzYnFxcmx5c2c5bm8ifQ.tdC6TWc_YpnKuOJEHk_Wwg'
    }
})


export default searchApi;