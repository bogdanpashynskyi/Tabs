import React, { Component } from 'react';

import './App.css';
import { Tabs, Tab } from './components/Tabs'

class App extends Component {
  render() {
    return (
      <Tabs> 
        <Tab title="First Tab">
          <p>First Tab Content Bla Bla Bla</p>
        </Tab>
        <Tab title="Second Tab">
          <p>Second Tab Content Bla Bla Bla Bla Bla Bla Bla</p>
        </Tab>
        <Tab title="Third Tab">
          <p>Third Tab Content Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla</p>
        </Tab>
      </Tabs>
    )
  }
}

export default App;
