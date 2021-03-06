import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Headline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { header, desc } = this.props;
    if (!header) {
      return null;
    }

    return (
      <div data-test="HeadlineComponent">
        <h1 data-test="Header">{header}</h1>
        <p data-test="Description">{desc}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool
    })
  )
};
export default Headline;
