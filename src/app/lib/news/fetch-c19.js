//./todaynews\src\app\lib\news\fetch-c19.js

import fetch from "cross-fetch";

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
}

export function fetchSummary(){
  return fetch(`https://api.covid19api.com/summary`, requestOptions)
  .then((response)=>response.json())
}

export function fetchCountries(){
  return fetch(`https://api.covid19api.com/countries`, requestOptions)
  .then((response)=>response.json())
}