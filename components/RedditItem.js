import React from 'react'

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
export default RedditItem;git