# Introduction to React, Flux/Redux and Webpack

## React intro/ concepts

### What is react?

 * https://facebook.github.io/react/
 * from facebook - a UI/View library
 * The V in MVC
 * Component based (separation and reusability)
 * For turning state into a UI
 * virtual dom - very fast, (selective rendering)
 * one way data flow (one way binding) - common parent component manages state and passes it down the chain via props

### How does it do this?

 * A React component has a render() method
 * render() uses state passed into a component via this.props to return html
 * Typically use JSX (an XML like syntax) to do this, but you don't have to
 * lifecycle methods: https://scotch.io/tutorials/learning-react-getting-started-and-concepts

### What is JSX

 * xml like syntax for representing a DOM as an ES2015 extension
 * naturally needs compiling - compiles into React.createElement calls

http://buildwithreact.com/tutorial/jsx
https://medium.com/javascript-scene/jsx-looks-like-an-abomination-1c1ec351a918#.1i13exbzz

### Stateful components

 * React components can maintain their own internal state: this.state
 * this.props for state passed into the component
 * this.state for internal state data

## Redux intro/ concepts

### Flux:

 * https://bbvaopen4u.com/en/actualidad/reactjs-front-end-javascript-library-developed-facebook
 * application data flows in a single direction

### What is Flux/Redux?
 * a predictable state container
 * http://redux.js.org/
 * Just read this for why! http://redux.js.org/docs/introduction/Motivation.html
 * but TLDR: "mutation and asynchronicity" don't mix well

 * The whole state of your app is stored in an object tree inside a single store.
 * The only way to change the state tree is to emit an action, an object describing what happened.
 * To specify how the actions transform the state tree, you write pure reducers.

## What is Webpack?

 * a module loader that does it all for you :)
 * everything is javascript
 * works well with react (HMR/ hot loading/ css modules)
 * good intro to building a react/redux project with webpack: https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.rjl5xr7o0

## Project Steps

### Step 1: build the JS:

we want to use es6 and jsx so need to compile our JS:

npm init
npm i webpack --save-dev

create a webpack.config.js file:

module.exports = {
    entry: './src/index.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    }
}

create a src/index.js file:

console.log('hi');

build the bundle with the command:

./node_modules/webpack/bin/webpack.js

.eslintrc

### Step 2: Serve it:

npm i webpack-dev-server --save-dev

create an index.html file:

<html>
<body>
    <script src="/bin/app.bundle.js"></script>
</body>
</html>

run server with command:
./node_modules/webpack-dev-server/bin/webpack-dev-server.js

then browse to localhost:8080 to see the page
(check console for "hi" message)
open 'http://localhost:8080'

(and show off hotloading)
open 'http://localhost:8080/webpack-dev-server/'

### Step 3: Setting the compilation of ES6 and JSX up:

npm i babel-loader babel-core --save-dev
npm i react --save

add a webpack babel module loader into the config:
,
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" }
        ]
    }

tell babel that we want to be compiling es6 and jsx with a .babelrc:

{
    presets:['es2015','react']
}

show this is working with the new component using es6:

import React from 'react';

const someText = <div>world</div>;
console.log(`hi ${someText}`);

rebuild webpack with command:
./node_modules/webpack/bin/webpack.js
and rerun server with command:
./node_modules/webpack-dev-server/bin/webpack-dev-server.js

### Step 4: Setting up source maps

add the following to your webpack config:

,
    devtool: 'source-map'

done! :)

### Step 5: Our first React component

npm i react-dom --save

create a dom element to host our client side app in index.html

add the following inside body:

    <div id="app"></div>

create a new file src/components/document.js which will be our 1st React component:

import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div>My document!</div>
        )
    }
})

change src/index.js (our app entry point) to render out our new React component:

import React from 'react';
import ReactDOM from 'react-dom';

import Document from './components/document.js';

ReactDOM.render(<Document />, window.document.getElementById('app'));

### Step 6: Forms

controlled vs uncontrolled inputs:
https://facebook.github.io/react/docs/forms.html

controlled if the value is set in jsx - user input will have no effect
if value not set it's uncontrolled and you have to manage the state updating yourself via the onchange event for example

look at component lifecycle

https://facebook.github.io/react/docs/working-with-the-browser.html

1st: if your component has state you have to declare the initial state by returning an object in the getInitialState() method

2nd: you can access this state and it's just a normal js object - but DON'T modify it! consider it immutable. use setState() instead

3rd: hence see the addPart function can't just use array.push - instead it's using concat to return a new array and then using setState() to set it back - use immutable methods. slice don't splice ;)

4th: notice how we pass props to child components - even methods passed as props

5th: notice this is an uncontrolled component:
upside: can be more performant and we don't have to manage the value ourselves - but the only way then to get the value is considered a bit of an anti-pattern with using refs

6th: so lets see a controlled component version

### Step 7: controlled component

we bind the value of the input element. Without the onchange the user wouldn't be able to change the value as it's now bound and controlled by react. We have to take full control of it by setting the state in the onchange.

advantage is we are just working on state, separated from the html rendering again

timeout to talk about lifecycle methods:
http://busypeoples.github.io/post/react-component-lifecycle/

### Step 8: React dev tools and hot module replacement

React dev tools - handy to see:

 1. what component is rendering what part of the html
 2. current state of each component
 3. what props passed to each component

npm install react-hot-loader --save-dev

add --hot to webpack-dev-server call (you can add the HMR plugin into webpack config instead if you like but don't do both)

add react-hot-loader as a js module loader

add dev server and hot module entry points to webpack config

HMR: don't reload the whole app and lose all your state - just hot swap individual components!

### Step 9: Interactive UIs

divorced from the HTML completely - how create interactive websites?

### Step 10: resuable components

Simple refactor step to identify duplication - ideally we already knew about this as we designed our components top-down

https://facebook.github.io/react/docs/thinking-in-react.html

### Step 11: talking to the server

lets talk about state:
firstly document now owns the parts list state
it depends on an add part component for constructing a part which on creation calls the document addpart method to add the new part to the state

the document component also depends on parts component which is responsible for rendering out the parts list

1 way data flow from highest component to lowest

what if other components that don't live under document need to access the parts list? hoist the parts list higher up in the app...

each componentn maintaing some of the state of the app ends up messy - does the react component send off ajax calls itself to update the server with this new state? each component doing that for different bits of the app state? they now take on too much responsibility!

enter flux architectures (or specifically for us: Redux)

### Step 12: Enter redux

Why did Dan Abramov write redux?
https://github.com/reactjs/redux/issues/216#issuecomment-118682938

Presentational and Container components

we use container components to hook up a part of redux state with the state for a component (via props)

(The idea being presentational components have no dependencies - just take props and render them out - they could be written as pure stateless functions)

(containers just connect redux state to props of child containers)

You could easily do this by hand and store.subscribe() but React Redux library gives you a handy connect() method to do all the boilerplate for you and you just supply it with 2 methods: mapstatetoprops() and mapdispatchtoprops() 

Step 1: work out our state heirachy:

Document: {
    name: '',
    parts: [
        id: 123,
        name: ''
    ]
}

Step 2: add reducers and actions

Step 3: setup components to have containers

Step 4: hook up the state

### Step 13: Get Parts "reduxed"

### Step 14: hook up redux dev tools

### Step 15: reducer composition

### Step 16: redux midleware: hook up redux state to server

### Step 17: adding user feedback for async actions

## Testing!

3 ways:

1: unit tests using mocha and chai - your redux code is all pure functions
2: shallowrendering and dom testing of react components
3: e2e tests with nightwatch

### Step 18: testing actions

### Step 19: testing reducers

https://facebook.github.io/react/docs/test-utils.html
new testing tool called enzyme from airbnb, probably the way to go, but I don't know it yet
http://airbnb.io/enzyme/

show shallow rendering
http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/

react test tools: simulate dom events, render into detached dom
shallow rendering - render component 1 deep

### Step 20: testing components with shallow rendering

### Step 21: testing components using the dom

### Step 22: simulating clicking and rendering the whole dom

### Step 23: e2e testing with nightwatch

### Step 24: e2e testing with server interaction

## Advanced topics:
 * react-router
 * css modules
 * Immutable.js (usage in redux store)
 * Integrating Authentication and authorisation into redux
 * react mixins and hofs

use starter kits:
https://github.com/gaearon/react-hot-loader/tree/master/docs#starter-kits

## Running the talk

 * get that next_commit()/prev_commit()/first_commit() function working
 * get a big font/ small font function working in both vim and iterm (windows + mac)
 * get a magnifier for macbook for devtools?
