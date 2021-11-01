import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamingCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header"> {error} </div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label> {label} </label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {}

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary"> Publish </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Please Enter Title';
  }
  if (!formValues.description) {
    errors.description = 'Please Enter Description';
  }
  return errors;
};

export default reduxForm({
  form: 'StreamingCreate',
  validate,
})(StreamingCreate);
