import React from 'react';
import './App.css';
import Home from './components/home';


class App extends React.Component {

  render() {
    return (
      <div className="parentDiv">
        <Home/>
      </div>
    );
  }
}

export default App;
