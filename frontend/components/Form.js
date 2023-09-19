import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputText: '' };
  }

  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.inputText.trim() !== '') {
      this.props.addTodo(this.state.inputText);
      this.setState({inputText: ''});
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        type='text'
        placeholder='Add a todo to the list :)'
        value={this.state.inputText}
        onChange={this.handleChange}
        />
        <button type='submit'>Add something to do </button>
        <button onClick={this.props.clearCompleted}>Completed</button>
      </form>
      
    );
  }
};

export default Form;