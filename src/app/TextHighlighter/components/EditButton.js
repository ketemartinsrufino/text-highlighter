import React from 'react';
import PropTypes from 'prop-types';

const EditButton = ({ isEnabled, onClick }) => (
  <button disabled={!isEnabled} onClick={onClick}>
  EDIT
  </button>
)

EditButton.defaultProps = {
  isEnabled: false
}

EditButton.propTypes = {
  isEnabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default EditButton;