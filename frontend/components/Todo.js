import React from 'react'

 class Todo extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <div>
        <input type="checkbox" checked={todo.completed} onChange={this.props.toggleTodo} />
        {todo.text}
      </div>
    )
  }
}

export default Todo;