import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    this.setState((prevState) => ({ todos: [...prevState.todos, newTodo] }));
  }

  toggleTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  clearCompleted = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => !todo.completed),
    }));
  };
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <Form addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;