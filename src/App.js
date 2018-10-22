import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import Auth from './views/Auth';
import { GetAuthToken } from './store/user/selectors';

const styles = {
  app:{
    background:`
    linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
    linear-gradient(27deg, #202020 5px, transparent 5px) 0px 10px,
    linear-gradient(207deg, #202020 5px, transparent 5px) 10px 5px,
    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
    linear-gradient(#1d1d1d 25%, #111111 25%, #111111 50%, transparent 50%, transparent 75%, #242424 75%, #242424)`,
    backgroundColor: '#131313',
    backgroundSize:'20px 20px',
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    color:'#eeeeee',
  }
}

class App extends Component {
  render() {
    const { token } = this.props;

    const Content = token ? <div>authentication success</div> : <Auth />;

    return (
      <div style={ styles.app } className="App">
        <Header />
        {Content}
      </div>
    );
  }
}

const mapStateToProps = ( state, ownProps ) => {
  console.log( 'App mapStateToProps', state, ownProps );
  return {
    token: GetAuthToken( state )
  }
}

export default connect( mapStateToProps )( App );
