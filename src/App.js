import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import Auth from './views/Auth';
import { GetAuthToken } from './store/user/selectors';

const styles = {
  app:{

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

    const Content = token || true ? <CardList /> : <Auth />;

    return (
      <div style={ styles.app } className="App">
        <Header />
        {Content}
      </div>
    );
  }
}

const mapStateToProps = ( state, ownProps ) => {
  return {
    token: GetAuthToken( state )
  }
}

export default connect( mapStateToProps )( App );
