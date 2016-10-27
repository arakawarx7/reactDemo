import React from 'react';
import RedditList from './RedditList';
import styles from './RedditPage.scss'
class RedditPage extends React.Component{
  constructor(){
    super();


  this.state = {
    data:[]
  };

  this.onRedditData = this.onRedditData.bind(this)
}

  onRedditData(data){
    console.log("data",data)
    const parsedRedditData = JSON.parse(data.currentTarget.response)
    console.log('redditpage:', parsedRedditData);
    this.setState({data: parsedRedditData.data.children});
  }

loadDataFromReddit(){

  const oReq = new XMLHttpRequest();
  console.log(this.props.redditUrl);
  oReq.addEventListener('load', this.onRedditData);
  oReq.addEventListener('error', this.onRedditData);
  oReq.open('GET', this.props.redditUrl);
  oReq.send();

}

componentWillMount() {
  this.loadDataFromReddit()
}

  render(){
    return(
      <div className={styles.RedditPage}>
        <h1>Reddit Page</h1>
        <RedditList data={this.state.data}/>
      </div>
    )
  }
};

RedditPage.defaultProp = {
  data: React.PropTypes.array,
}

RedditPage.defaultProp = {
  data: [],
}

export default RedditPage;