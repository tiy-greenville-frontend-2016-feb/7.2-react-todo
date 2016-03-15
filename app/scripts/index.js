var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('./components/todo.jsx');

ReactDOM.render(
  React.createElement(TodoApp),
  document.getElementById('app')
);
