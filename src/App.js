import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';

import './App.scss';

class App extends Component {
  render() {
    const tempArr = [
      {
        fName: 'Joe',
        lName: 'Blogs',
        email: 'joeblogs@gmail.com',
        age: 24,
        onlineStatus: 1
      }
    ];
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="click the button to render props"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}

export default App;
