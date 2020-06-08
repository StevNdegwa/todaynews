import React from "react";
import {fetchTopics, fetchTopNews, fetchSearchNews} from "../../../lib/news/fetch-news";

import {MdChevronRight,MdCancel} from "react-icons/md";
import {Control} from "../../styled-comp";
import {List, Item, PSearches, Search, NewsLoader, TopicImg} from "./styles";

import SiteContext from "../../../SiteContext";

import business_img from "./images/business.jpg";
import health_img from "./images/health.jpg";
import technology_img from "./images/technology.jpg";
import world_img from "./images/world.jpg";
import sports_img from "./images/sports.jpg";
import city_img from "./images/city.jpg";

const {searches} = require("../../../data/popular-searches.json");

export default function NewsList({topic, query}){
  const [articles, setArticles] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [currQuery, setCurrQuery] = React.useState(query);
  const [netError, setNetError] = React.useState({error:false, message:""});
  const [currTopic, setCurrTopic] = React.useState(topic);
  
  const site = React.useContext(SiteContext);
  
  React.useEffect(()=>{
    updateArticles(topic, query);
    return ()=>{
      setArticles({});
    }
  }, [topic, site.country])
  
  function topicImage(){
    let images = {
      world: world_img, 
      nation: world_img, 
      business: business_img, 
      technology: technology_img, 
      entertainment: business_img, 
      sports: sports_img,
      science: business_img,
      health: health_img,
      topnews: city_img
    };
    
    return images[currTopic];
  }
  
  async function updateArticles(topic, query){
    setCurrTopic(topic);
    setCurrQuery(query);
    //if((!articles[topic] || articles[topic].length === 0) || !!query){
      setLoading(true);
      setNetError(false);
      try{
        const article = await getNewsArticles(topic, query, site.country);
        setLoading(false);
        if(!article || (article.length === 0)){
          setNetError({error:true, message:"No results to display 😓. Something must be wrong."});
        }
        
        setArticles((state)=>{
          return {...state, [topic]:article}
        });
      }catch(error){
        console.log(error)
        setLoading(false);
        setNetError({error:true, message:"Please check your internet connection"});
      }
    //}
  }
  
  
  function handlePopularSearchClick(q){
    return updateArticles("search", q);
  }

  return (<>
    <List>
    {(currTopic === "search") ? 
      <><Item><h2><MdChevronRight/><span>Search Results:</span></h2><p>{currQuery}</p></Item></> : 
      <TopicImg src={topicImage()} className="topicImage"/>
    }
    <hr/>
    {loading && <Item><NewsLoader size="50px"/></Item>}
    {netError.error && <Item><Control><MdCancel size="1.5em"/>{netError.message}</Control></Item>}
    {articles[currTopic] && articles[currTopic].map((article, idx)=>{
      return (<Item key={idx}>
        <article>
          <h4><a href={article.url} target="_blank">{article.title}</a></h4>
          <p>{article.description}</p>
        </article>
      </Item>)
    })}
    </List>
    <PSearches>
      <Search><h4>Popular Searches</h4></Search>
      {searches.map((search, idx)=>{
        return (<Search key={idx} onClick={()=>handlePopularSearchClick(search)}>{search}</Search>)
      })}
    </PSearches>
  </>)
}


async function getNewsArticles(topic, query, country){
  try{
    var news;
    switch(topic){
      case "topnews":
        news = await fetchTopNews(country);
        break;
      case "search":
        query = encodeURI(query);
        news = await fetchSearchNews(query, country);
        break;
      default:
        news = await fetchTopics(topic, country);
    }
    
    return news.articles;
  }catch(error){
    console.log(error)
    return [];
  }
}
