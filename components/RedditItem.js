import React from 'react'
import { connect } from 'react-redux';
import { deletePosts } from '../actions/redditActions';




class RedditItem extends React.Component{
  constructor(){
    super();
    this.deleteReddit = this.deleteReddit.bind(this);
  }

  deleteReddit () {
     console.log('inside deleteReddit', this.props);
     const { dispatch, index } = this.props;
     dispatch(deletePosts(index));
     return;
   }


  render(){
    console.log("this props", this.props)
    return(
      <div className ="redditItem">
        <h4> {this.props.title}</h4>
        <p> {this.props.author}
          <button onClick={this.deleteReddit}>Delete</button>
        </p>
      </div>
    )
  }
}

// export default RedditItem;

const mapStateToProp = (state, ownProps) => {
  const { redditPostReducer } = state;
  return {
    data:redditPostReducer.toJS()
  }
}


export default connect(
mapStateToProp
  )(RedditItem);