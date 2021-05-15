import axios from 'axios';



const FetchAll = () => {
    return axios
        .get(`https://disease.sh/v3/covid-19/all`);
}
export { FetchAll }



const FetchCovid = (query) => {
    return axios
        .get(`https://disease.sh/v3/covid-19/countries/${query}`);
}
export { FetchCovid }


const FetchCovidCountry = () => {
    return axios
        .get(`https://disease.sh/v3/covid-19/countries/`);
}
export { FetchCovidCountry }
