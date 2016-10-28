import React from 'react';
import { connect } from 'react-redux';
import { receivePosts } from '../actions/redditActions';
import RedditList from './RedditList';
import styles from './RedditPage.scss'
class RedditPage extends React.Component{
  constructor(){
    super();


  // this.state = {
  //   data:[]
  // };

  this.onRedditData = this.onRedditData.bind(this)
}

  onRedditData(data){
    const { dispatch } = this.props;
    const parsedRedditData = JSON.parse(data.currentTarget.response).data.children
    dispatch(receivePosts(parsedRedditData));
    //this.setState({data: parsedRedditData.data.children});
  }

loadDataFromReddit(){

  const oReq = new XMLHttpRequest();
  console.log(this.props.redditUrl);
  oReq.addEventListener('load', this.onRedditData);
  oReq.addEventListener('error', this.onRedditData);
  oReq.open('GET',"http://www.reddit.com/r/dogs.json");
  oReq.send();

}

componentWillMount() {
  console.log('this.props',this.props);
  this.loadDataFromReddit()
}

  render(){
    return(
      <div className={styles.RedditPage}>
        <h1>Reddit Page</h1>
        <RedditList data={this.props.data}/>
      </div>
    )
  }
};

RedditPage.defaultProp = {
  data: React.PropTypes.array,
}


const mapStateToProp = (state, ownProps) => {
  const { redditPostReducer } = state;
  return {
    data:redditPostReducer.toJS()
  }
}
export default connect(
mapStateToProp
  )(RedditPage);