import React from "react";
import { connect } from "react-redux";
import { fetchTodos, deleteTodo } from "../actions";
import history from "../history";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  onDeleteClick = (id) => {
    this.props.deleteTodo(id);
  };

  renderList() {
    return this.props.todos.map((todo) => {
      return (
        <div className="item" key={todo.id}>
          <div
            onClick={() => this.onDeleteClick(todo.id)}
            className="right floated content"
          >
            <i className="trash red icon"></i>
          </div>
          <div
            onClick={() => history.push(`/edit/${todo.id}`)}
            className="right floated content"
          >
            <i className="edit outline purple icon"></i>
          </div>
          <div className="header">{todo.title}</div>
        </div>
      );
    });
  }

  render() {
    if (!this.props.todos) {
      return <div>Loading...</div>;
    }
    return <div className="ui celled bulleted list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { todos: Object.values(state.todos) };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(TodoList);
