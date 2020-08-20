import React from "react";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";
import { createTodo } from "../actions";

class TodoCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createTodo(formValues);
  };

  render() {
    return (
      <div>
        <h2>Create a Todo List</h2>
        <TodoForm buttonName="Add" onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createTodo })(TodoCreate);
