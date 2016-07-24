import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import List from './List';
import Footer from './Footer';


class App extends React.Component {

  render () {
    return(
      <div>
          <Header />
          <List />
          <Footer />
      </div>
    )
  }
}


export default App;
