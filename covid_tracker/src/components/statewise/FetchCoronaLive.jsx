import axios from 'axios';


function FetchCoronaLive(query) {
    return axios
        .get(`https://api.covid19api.com/live/country/${query}`)
}
export { FetchCoronaLive }