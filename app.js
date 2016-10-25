'use strict'

// const data = [
//     { id:1, title: 'Cat are lazy AF', author: 'aaron'},
//     { id:2, title: 'dog are cool AF', author: 'tim'},
//     { id:3, title: 'sheep are ugly AF', author: 'greg'},
//     { id:4, title: 'rats are gross AF', author: 'bob'},
// ];

class RedditPage extends React.Component{
  constructor(){
    super();


  this.state = {
    data:[]
  };

  this.onRedditData = this.onRedditData.bind(this)
}

  onRedditData(data){
    const parsedRedditData = JSON.parse(data.currentTarget.response)
    console.log('redditpage:', parsedRedditData);
    this.setState({data: parsedRedditData.data.children});
  }

loadDataFromReddit(){

  const oReq = new XMLHttpRequest();
  oReq.addEventListener('load', this.onRedditData);
  oReq.addEventListener('error', this.onRedditData);
  oReq.open('GET', this.props.redditURL);
  oReq.send();

}

componentWillMount() {
  this.loadDataFromReddit()
}

  render(){
    return(
      <div>
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

class RedditList extends React.Component{
  render(){
    console.log('this.props.data',this.props.data)
    const redditListNode = this.props.data.map((dataItem)=>{
      console.log('dataItem', dataItem)
      return(
        <RedditItem
           title={dataItem.data.title}
           key={dataItem.data.id}/>
      )
    })
    console.log("this props", this.props)
    return(
      <div>
        <h2> Reddit List</h2>
        {redditListNode}
      </div>
    )
  }
}

class RedditItem extends React.Component{
  render(){
    console.log("this props", this.props)
    return(
      <div className ="redditItem">
        <h4> {this.props.title}</h4>
        <p> {this.props.author}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <RedditPage redditURL='https://www.reddit.com/r/memes.json'/>,
  document.getElementById('root')
  );