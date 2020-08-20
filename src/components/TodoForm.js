import React from "react";
import { Field, reduxForm } from "redux-form";

class TodoForm extends React.Component {
  renderInput({ input, buttonName }) {
    return (
      <div className="field">
        <div className="ui action input">
          <input {...input} autoComplete="off" />
          <button className="ui button primary">{buttonName}</button>
        </div>
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field
          name="title"
          component={this.renderInput}
          buttonName={this.props.buttonName}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "todoForm",
  enableReinitialize: true,
})(TodoForm);
