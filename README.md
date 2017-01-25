# README

The following app was completed following Scotch.io's tutorial: 
[Learning React.js: Getting Started and Concepts](https://scotch.io/tutorials/learning-react-getting-started-and-concepts).  It was built using the [create-react-app](https://github.com/facebookincubator/create-react-app) CLI.

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
- So I built my third component, the Counter component.  First thing I noticed was that using
the tutorial's syntax for building the Counter class, I have to separate my methods with commas.
When you look at it, you can see that it is essentially one big object.  I don't think I like
syntax as much as I've learned in other places...re-writing this component would be a good exercise.





