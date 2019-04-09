import React from 'react';

const Option = props => (
  <div className="option">
  <p className="option__text">{props.index}.{' '}{props.option}</p>
    <span>
      <button
        className="button button--link"
        onClick={() => props.handleDeleteOption(props.option)}
      >
        remove
      </button>
    </span>
  </div>
);

export default Option;
