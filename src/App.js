import React, { Component } from 'react';
import './App.css';

const tabs = [
  {
    id: 0, title: 'First Tab', content: 'In my last post I talked about how to make your résumé more likely to catch the attention of a hiring manager. As a follow up, I’d like to discuss cover letters. Here’s my basic philosophy on them: don’t bother.'
  },
  {
    id: 1, title: 'Second Tab', content: 'You’ve got more to do than could possibly get done with your current work style. You’ve prioritized. You’ve planned. You’ve delegated. You’ve tried to focus. The next frontier is increasing your efficiency so that you can spend less time and still do a good job.'
  },
  {
    id: 2, title: 'Third Tab', content: 'Not long ago, I gave a speech at a company that had been recently acquired and since gone from 300 employees to 1,400. Rapid changes are hard for any organization, but when I asked these leaders what their biggest challenge was they didn’t say “scaling our tech infrastructure” or “hiring good people fast enough” or “integrating with our  parent company.”'
  },
];

class App extends Component {
  state = {
    currentTab: tabs[0].content,
  };

  getCurrentTab = (tabId) => {
    this.setState ({
      currentTab: tabs[tabId].content,
    })
  }

  render() {
    const { currentTab } = this.state;

    return (
      <div className="Tabs">
        <div>
          {tabs.map(tab => 
            <div 
              className="Tab__titles"
              key={tab.id}
              onClick={() => this.getCurrentTab(tab.id)}
            >
              {tab.title}
            </div>
          )}
          
        </div>
        <div className="Tabs__content">{currentTab}</div> 
      </div>

      
    );
  }
}

export default App;
