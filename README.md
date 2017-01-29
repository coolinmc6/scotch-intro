# README

The following app was completed following Scotch.io's tutorial: 
[Learning React.js: Getting Started and Concepts](https://scotch.io/tutorials/learning-react-getting-started-and-concepts).  It was built using the [create-react-app](https://github.com/facebookincubator/create-react-app) CLI.

## Next Steps

- get a list of the JS functions that it feels like EVERY React app uses (filter, map, reduce, 
etc)
- break up my notes by sections
- do another quick read-through of the tutorial and place the questions in the appropriate
sections
- ~~redo the app using the ES6 class syntax that you're used to WITHOUT looking at these
files.  I need to build 5 components (not including the App): ~~
  - 'Hello World' component that can receive a 'name' and display it on the screen
  - 'State' component that has an initial state and displays that on the screen
  - 'Counter' component with initial state that can be incremented
  - 'FilteredList' and 'List' components that display a list of items that change dynamically
  as the user enters items
  - finished version located here: [scotch-intro-CM](https://github.com/coolinmc6/scotch-intro-CM)

## Notes
 - React can be rendered server side as well (what does that mean?  What does that do
 for me?)
 - React uses the Virtual DOM and renders 'subtrees of nodes based upon state changes'.  It
 does the LEAST amount of DOM manipulation possible to keep the components up to date.
 - React components mount to an element which, in this app, is a div with id="root".
 - JSX = the JavaScript / HTML mix of code.  
 - JSX allows you to write HTML-ish code in your JavaScript
 - The tutorial has me placing most of the components in one script tag but the 
 [create-react-app](https://github.com/facebookincubator/create-react-app) automatically
 breaks up the files.  Right now, everything is in my /src/ directory.  I will, for now, just
 keep everything there and then when I am finished, possibly organize everything by component.
 - To get 'Hello, World!' up on my screen, this is what I have right now:

```html
<!-- /public/index.html -->
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>React App</title>
</head>
<body>
<div id="root"></div>
</body>
</html>
```
- my index.html file has very little besides a div with id="root".  As I said above, this is
where my app mounts

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
- my index.js file is importing the necessary libraries, react and reactDOM, and then is
importing my app.
- it also has the responsibility of telling ReactDOM what to render (my App component) 
and where to mount it (standard JS grabbing the div with id="root")
```javascript
// src/App.js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
       Hello, World!
      </div>
    );
  }
}

export default App;
```
- this is my App.  Here are the main bits:
  - import necessary libraries (I'm writing JSX but I'm NOT rendering it to the DOM, so
  I guess I don't need ReactDOM)
  - my App is a component that wants to inherit all the good stuff about being a React 
  'Component', hence the 'class App extends Component' and the import { Component } part
  at the top
  - Lastly, I am exporting it
    - if I comment out that line, the error I receive is in the Terminal where it tells me 
    that 'App' is defined but never used.

- Here is my first component, MyComponent:
```javascript
import React, { Component } from 'react';

const MyComponent = React.createClass({
	render: function(){
		return (
			<h1>Hello, World (from inside MyComponent)!!</h1>
		);
	}
})

export default MyComponent;
```
  - because I am not doing everything in one script tag, I have a little bit extra work so
  let me discuss what I tripped me up (very briefly).
  - First, I built the component (essentially just the middle part), imported it into App.js,
  and then nothing happened.  I need to remember to EXPORT it.  If you don't export it, you can't
  use it anywhere else.
  - Second, the naming of the file in App.js when importing it is important.  I forgot the ./ 
  before the name of the component and didn't capitalize it: it's MyComponent not myComponent.
  I don't need the .js either: 'import MyComponent from './myComponent';' is correct
  - Third, you can't get any of the component goodies WITHOUT the import React, { Component } 
  statement.
  - In any component, you need to import the library, the Component itself, and then export it.
  Import React, Build Component, Export Component. Import Libraries, Build Component, Export
  Component.
- We can add attributes to our components called props.
- I can display it on the page by putting {this.props.name} between my h1 tags in my Component.
BUT I have to actually give it some props like so in the App.js file:
```javascript
<MyComponent name="Colin"/>
```
- if it is blank, the page still renders but nothing shows up.
  - Q: how do I do default props again??
- The render() method is the only required spec for creating a component but there are
lifecycle methods (what?) and specs (what?) that allow us to do other things
  - Q: what are lifecycle methods?  What are specs?  How are they different?
  - Revisit the Scotch.io page on [Specs, Lifecycle & State](https://scotch.io/tutorials/learning-react-getting-started-and-concepts#specs-lifecycle-state) for more
  - I should probably learn each of the listed lifecycle methods and specs but for now, I'll 
  hold off.  They recommend reading some of the React docs 
  [here](https://facebook.github.io/react/docs/react-component.html).
- every component has a state object and a props object (what's the difference?)
- I created another component called StateComponent which is just the example on state.  When
building the component, remember to render a plain div first and then you can start doing the
cool stuff.  
  - Render first, then Build.

## Events

- So I built my third component, the Counter component.  First thing I noticed was that using
the tutorial's syntax for building the Counter class, I have to separate my methods with commas.
When you look at it, you can see that it is essentially one big object.  I don't think I like
syntax as much as I've learned in other places...re-writing this component would be a good exercise.
- I've been importing { Component } as well in my components like I've learned elsewhere but
I get a warning explaining how { Component } is defined but not used.  I guess the
React.createClass object is not equal to what { Component } brings to the table.

## Unidirectional Data Flow

- In React apps, data flows unidirectionally, unlike the two-way binding of libraries like
Angular. 
- This data flows via the state and props objects.
- In an app where there are multiple child components in a parent component, the common
parent component should manage state and pass it down the chain via props
- State should be updated via the setState method to make sure the UI refreshes.  Those
resulting values can then be passed down to child components via 'this.props'
- In the search example, I wanted to explain a couple items more intensely.

### getInitialState()

- Before I discuss the filterList() method, I want to address the getInitialState method.
It looks like getInitialState() is really only used when you are using the the React.createClass
syntax.  Using ES6 classes: 
```javascript
// As I saw in Udemy...
class MyComponent extends Component {
  
// OR
class MyComponent extends React.Component {
```
  - when using ES6 classes, I need to use a constructor:
```javascript
constructor(props) {
  super(props);
  this.state = { /* initial state */ };
}
```
  - a good exercise would be to convert all of these 'old-fashioned' components into ES6 classes
  - a good source on this discussion [here](http://stackoverflow.com/questions/30668326/what-is-the-difference-between-using-constructor-vs-getinitialstate-in-react-r).
- The getInitialState() is a method that returns an object with two keys: 'initialItems' and
'items'.  Each of these is an array. 'initialItems' contains a list of items (strings) while
'items' is a blank array.
- Defining the function, I believe, is NOT enough to set the initial state.  So...right below it
is componentWillMount(), a function that sets the 'items' key of state to what is in the
initialItems array. So after this function runs, both will contain the same number of items.
- As a reminder, the componentWillMount() method is a 'lifecycle method' that is invoked once, 
on both the client and server BEFORE rendering occurs.
- So when this list is initially rendered, we will see whatever is my initialList which, for this
example, is just a list of foods that we can't really change.
- As we'll see in filteredList(), we can change the items that are shown by typing in the 
search bar.  But before that, let's look at the render() method.

### render()

- I am rendering a div with two elements inside it: an input (to search my list) and my
List component.
- For the Search bar, whenever its value is changed (you type something), the filterList()
method is called by doing 'this.filterList'.
- Below the Search bar, we placing a 'List' component:
```javascript
// <FilteredList />
render(){
  return (
    <div className="filter-list">
      <input type="text" placeholder="Search" onChange={this.filterList}/>
      <List items={this.state.items}/>
        </div>
  );
}

// <List />
render(){
  return (
    <ul>
          { 
            this.props.items.map(function(item) {
                return <li key={item}>{item}</li>
            })
          }
    </ul>
  );
}
```
  - this is where you can see the difference between a parent and child component and the
  state vs. props objects.
  - In the FilteredList component, we want to pass the contents of the FilteredList's 
  state's property 'items'.  Initially, this is just all the items.  But after each new
  change to the search bar, the state's 'items' property is updated and we pass the List
  component whatever is in it.
  - In the List component, we are receiving it into the 'props' object.  We do not have to
  define an 'items' property as it flows right through.  What we do in the List component is
  loop through the this.props.items property and return a new li tag for each item.  Notice
  that we give each item a key of 'item' which has to be unique.
  - Parent: this.state.stuff => Child: this.props.stuff
  - Q - what if we have grandchildren components?  Where does the state of the application 
  live?  Would I pass data from parent to child to grandchild?

### filteredList()

- First, what the function is doing isn't too complicated, I just don't know 'filter' very well.
I need to learn: filter, map, reduce and I'm sure there are so other higher order functions.
- Every time the filteredList function is run, updatedList is assigned to initialItems which
does not change in this example but if this was a dynamic list app that users could add and
remove items, I'm sure it would just be whatever the 'allItems' array is.
- updatedList is then run through the filter function where depending on what the user has 
entered, if that string exists somewhere within the item, then it is added to (or rather NOT 
removed from) the updatedList.
- Finally, we update state by setting items to the updatedList.
