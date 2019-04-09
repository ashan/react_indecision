import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

import OptionModal from './OptionModal';

export default class IndicisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleDeleteOption = optionToRemove => {
    this.setState(preState => ({
      options: preState.options.filter(option => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const pickIndex = Math.floor(Math.random() * this.state.options.length);
    this.setState(prevState => ({
      selectedOption: prevState.options[pickIndex]
    }));
  };

  handleAddOption = option => {
    if (!option) return 'Enter a valid value to add item';
    else if (this.state.options.indexOf(option) > -1)
      return 'This option already exists';
    this.setState(preState => ({
      options: [...preState.options, option]
    }));
  };

  handleCloseModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options)
        this.setState(() => ({
          options
        }));
    } catch (e) {}
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  render() {
    const subTitle = 'Put your life in the hands on a computer';
    return (
      <div>
        <Header subTitle={subTitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          root={this.props.root}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
