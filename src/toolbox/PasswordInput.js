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
    return <LabeledInput type="password" name={name} onChange={onChange}>{children}</LabeledInput>
  }
}

export default PasswordInput;
