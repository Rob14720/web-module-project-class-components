import React from 'react'
import Todo from './Todo'


 class TodoList extends React.Component {
  render() {
    const { todos, toggleTodo } = this.props;
    return (
      <div>
        <Todo key={Todo.id} todo={todo} toggleTodo={() => toggleTodo(todo.id)} />
      </div>
    )
  }
}

export default TodoList
