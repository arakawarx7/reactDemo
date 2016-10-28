import React from 'react'
import RedditItem from './RedditItem'

class RedditList extends React.Component{
  render(){
    console.log('this.props.data',this.props.data)
    const redditListNode = this.props.data.map((dataItem,index)=>{
      console.log('dataItem', dataItem)
      return(
        <RedditItem
           title={dataItem.data.title}
           index={index}
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
export default RedditList;
