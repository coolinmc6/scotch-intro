import React, { Component } from 'react';
import MyComponent from './myComponent';
import StateComponent from './stateComponent';
import Counter from './counter';
import FilteredList from './filteredList';

class App extends Component {
  render() {
    return (
        <div>
            <MyComponent name="Colin"/>
            <StateComponent />
            <Counter />
            <FilteredList />
        </div>
    );
  }
}

export default App;
