import fetch from "cross-fetch";


export default function getCurrentWeather(locationName){
  const params = new URLSearchParams([["query", locationName], ["access_key", "1ce282ba2d6437e83361be15b0b66b23"]]);
  return fetch(`http://api.weatherstack.com/current?${params}`, {method:"GET"})
  .then((response)=>{
    return response.json();
  })
}