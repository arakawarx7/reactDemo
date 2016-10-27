import React from 'react';
import RedditPage from './components/RedditPage';
// const data = [
//     { id:1, title: 'Cat are lazy AF', author: 'aaron'},
//     { id:2, title: 'dog are cool AF', author: 'tim'},
//     { id:3, title: 'sheep are ugly AF', author: 'greg'},
//     { id:4, title: 'rats are gross AF', author: 'bob'},
// ];
//
class App extends React.Component{
  render(){
    return(
      <div>
      <RedditPage
      redditUrl='https://www.reddit.com/r/webdev.json'
      />
      </div>
    )
  }
}
export default App;




