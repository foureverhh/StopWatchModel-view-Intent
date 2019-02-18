import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

const model= {
  running : false,
  time:0
};

const View =({model})=> {
  return(
    <div>
      <h1>Time is: {model.time}</h1>
    </div>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <View model={model}/>
      </div>
    );
  }
}

export default App;
