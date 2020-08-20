import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import "./App.css";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import TodoEdit from './TodoEdit';

class App extends React.Component {
  render() {
    return (
      <div id="container">
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/" exact component={TodoCreate} />
              <Route path="/edit/:id" exact component={TodoEdit} />
            </Switch>
            <TodoList />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
