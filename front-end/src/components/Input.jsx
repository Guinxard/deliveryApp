import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { labelText, onChange, dataTestId, placeHolder, type } = props;
  return (
    <label htmlFor={ labelText }>
      <h5>{ labelText }</h5>
      <input
        type={ type }
        onChange={ onChange }
        data-testid={ dataTestId }
        placeholder={ placeHolder }
      />
    </label>
  );
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
