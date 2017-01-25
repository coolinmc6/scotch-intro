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



