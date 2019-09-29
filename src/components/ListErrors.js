import React from 'react';

class ListErrors extends React.Component {
  render() {
    const errors = this.props.errors;
      return (
        <span className="error-messages">{errors}</span>
      );
  }
}

export default ListErrors;
