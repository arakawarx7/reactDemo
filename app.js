import React from 'react';
import Footer from './components/static/footer'
import RedditPage from './components/RedditPage';
import {Link} from 'react-router';
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
        <ul role='nav'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
          <div>
            {this.props.children}
          </div>
           <Footer />
      </div>
    )
  }
}
export default App;




