//./todaynews\src\app\lib\news\fetch-news.js

import fetch from "cross-fetch";

export function fetchTopics(topic){
  return fetch(`https://gnews.io/api/v3/topics/${topic}?token=e44696b883dc0684501c463c4bf8c5a9`, {method:"GET"})
  .then((response)=>response.json())
}

export function fetchTopNews(){
  return fetch(`https://gnews.io/api/v3/top-news?token=e44696b883dc0684501c463c4bf8c5a9`, {method:"GET"})
  .then((response)=>response.json())
}

export function fetchSearchNews(query){
  return fetch(`https://gnews.io/api/v3/search?q=${query}&token=e44696b883dc0684501c463c4bf8c5a9`, {method:"GET"})
  .then((response)=>response.json())
}