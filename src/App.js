import React, { Component } from 'react';
import MyComponent from './myComponent';
import StateComponent from './stateComponent';
import Counter from './counter';

class App extends Component {
  render() {
    return (
        <div>
            <MyComponent name="Colin"/>
            <StateComponent />
            <Counter />
        </div>
    );
  }
}

export default App;
