import React from 'react';
import PropTypes from 'prop-types';
import { TextAreaStyled } from './styles';

const TextArea = ({ value, onChange, onBlur }) => (
  <TextAreaStyled 
    value={value} 
    onBlur={onBlur}
    onChange={onChange}/>
)

TextArea.defaultProps = {
  value: ''
}

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func
};

export default TextArea;