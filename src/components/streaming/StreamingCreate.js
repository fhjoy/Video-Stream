import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamingForm from './StreamingForm';

class StreamingCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamingForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamingCreate);
