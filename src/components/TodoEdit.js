import React from "react";
import _ from "lodash";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";
import { fetchTodo, editTodo } from "../actions";

class TodoEdit extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editTodo(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <h2>Edit Todo</h2>
        <TodoForm
          initialValues={_.pick(this.props.todo, "title")}
          buttonName="Save"
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTodo, editTodo })(TodoEdit);
