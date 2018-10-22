import React, { Component } from 'react';

const styles = {
  container:{
    display:'flex',
    margin:'0.5em'
  },
  label:{
    width:'50%',
    textAlign:'left'
  },
  input:{
    width:'50%',
  }
}

class LabeledInput extends Component{
  render(){
    const {
      children,
      type,
      onChange,
      name
    } = this.props;
    return <div style={ styles.container }>
      <label style={ styles.label }>{children}</label>
      <input onChange={onChange} style={ styles.input } type={type} name={name} />
    </div>
  }
}

export default LabeledInput;
