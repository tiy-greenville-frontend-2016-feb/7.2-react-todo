var React = require('react');
var ReactDOM = require('react-dom');


var TodoList = React.createClass({
  render: function(){
      var createItem = function(todoItem){
        return <li key={todoItem.id}>{todoItem.text}</li>;
      };

      return (
        <ul>
         {this.props.items.map(createItem)}
        </ul>
      );
  }
});

var TodoForm = React.createClass({
  render: function(){
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          onChange={this.props.handleChange}
          placeholder="Todo Here"
          value={this.props.text}
        />
        <button className="btn btn-primary" type="submit">Add #1</button>
      </form>
    );
  }
});

var TodoApp = React.createClass({
  getInitialState: function(){
    return {items: [], text: ''};
  },
  handleSubmit: function(e){
    e.preventDefault();

    var newItems = this.state.items.concat([
      {'id': Date.now(), 'text': this.state.text}
    ]);

    this.setState({items: newItems, text: ''});
  },
  handleChange: function(e){
    this.setState({text: e.target.value});
  },
  render: function(){
    return (
      <div>
        <h1>TODO</h1>
        <TodoList items={this.state.items} />
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          text={this.state.text}
        />
      </div>
    )
  }
});

module.exports = TodoApp;


//
