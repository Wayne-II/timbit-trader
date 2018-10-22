import React, { Component } from 'react';
import LabeledInput from './LabeledInput';

class PasswordInput extends Component{
  render(){
    const {
      children,
      inputType,
      name,
      onChange
    } = this.props;
    return <LabeledInput onChange={onChange} type="text" name={name}>{children}</LabeledInput>
  }
}

export default PasswordInput;
