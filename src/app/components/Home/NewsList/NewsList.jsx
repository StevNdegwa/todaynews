import React from "react";
import fetch from "cross-fetch";

import {fetchTopics, fetchTopNews, fetchSearchNews} from "../../../lib/news/fetch-news";

import {MdChevronRight,MdCancel} from "react-icons/md";
import {Control} from "../../styled-comp";
import {List, Item, PSearches, Search, NewsLoader, TopicImg} from "./styles";

import business_img from "./images/business.jpg";
import health_img from "./images/health.jpg";
import technology_img from "./images/technology.jpg";
import world_img from "./images/world.jpg";
import sports_img from "./images/sports.jpg";
import city_img from "./images/city.jpg";

const {searches} = require("../../../data/popular-searches.json");

class NewsList extends React.Component{
  constructor(props){
    super(props);
    this.updateArticles = this.updateArticles.bind(this);
    this.handlePopularSearchClick = this.handlePopularSearchClick.bind(this);
    this.topicImage = this.topicImage.bind(this);
    this.state = {articles:{}, loading:false, topic:"", query:"", netError:false}
  }
  
  async componentDidMount(){
    await this.updateArticles(this.props.topic);
  }
  
  topicImage(){
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
    }, 
    {topic} = this.state;
    
    return images[topic];
  }
  
  async updateArticles(topic, query){
    const {articles} = this.state;
    this.setState({topic, query});
    if((!articles[topic] || articles[topic].length === 0) || !!query){
      this.setState({loading:true,netError:false})
      try{
        const article = await getNewsArticles(topic, query);
        this.setState((state, props)=>{
          return {articles:{...state.articles, [topic]:article}, loading:false, netError: !!article ? (article.length === 0) : true}
        });
      }catch(error){
        console.log(error)
        this.setState({loading:false})
      }
    }
  }
  
  componentWillUnmount(){
    delete this.state.articles;
    delete this.state.query;
    delete this.state.topic;
    delete this.state.loading;
  }
  
  handlePopularSearchClick(q){
    return this.updateArticles("search", q);
  }
  
  render(){
    const {articles, loading, topic, query, netError} = this.state;
    return (<>
      <List>
      {(topic === "search") ? <><Item><h2><MdChevronRight/><span>Search Results:</span></h2><p>{query}</p></Item></> : <TopicImg src={this.topicImage()} className="topicImage">{}</TopicImg>}
      <hr/>
      {loading && <Item><NewsLoader size="50px"/></Item>}
      {netError&&<Item><Control><MdCancel size="1.5em"/>Please check your internet connection</Control></Item>}
      {articles[topic] && articles[topic].map((article)=>{
        return (<Item>
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
        return (<Search key={idx} onClick={()=>this.handlePopularSearchClick(search)}>{search}</Search>)
      })}
    </PSearches>
  </>)
  }
}

async function getNewsArticles(topic, query){
  try{
    var news;
    switch(topic){
      case "topnews":
        news = await fetchTopNews();
        break;
      case "search":
        query = encodeURI(query);
        news = await fetchSearchNews(query);
        break;
      default:
        news = await fetchTopics(topic);
    }
    
    return news.articles;
  }catch(error){
    console.log(error)
    return [];
  }
}

export default NewsList;