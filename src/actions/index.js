import axios from 'axios'

const API_KEY = 'a430e8f46e1bb06160cac959775281c7';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = ROOT_URL + "&q=" + city + ".fi";
  // ajax request
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
