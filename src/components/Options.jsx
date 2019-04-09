import React from 'react';

import Option from './Option';
const Options = props => (
  <div>
    {props.options.length === 0 && (
      <p className="widget__message">Please add an option to get started</p>
    )}
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
      {props.options.map((option, index) => (
        <Option
          key={option}
          index={index + 1}
          option={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
  </div>
);

export default Options;
