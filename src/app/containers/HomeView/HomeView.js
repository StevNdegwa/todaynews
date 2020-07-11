import {connect} from "react-redux";
import Home from "../../components/Home";
import topicsSlice from "../../features/home/topicsSlice";

function mapStateToProps(state){
  return {
    newsTopics:state.newsTopics
  }
}

function mapDispatchToProps(dispatch){
  return {
    setTopics:(topics)=>dispatch(topicsSlice.actions.setTopics(topics)),
    removeTopic:(topic)=>dispatch(topicsSlice.actions.removeTopic(topic))
  }
}

const  HomeView = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeView;