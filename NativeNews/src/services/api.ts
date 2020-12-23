import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:4000'
});

export const covidApi = axios.create({
    baseURL: 'https://disease.sh/v3/covid-19/countries/portugal?strict=true'
});

export default api;