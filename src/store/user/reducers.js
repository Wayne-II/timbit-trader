import Redux, { combineReducers } from 'redux';
import { relevantType } from '../util';
import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_STATUS_SUCCESS,
  AUTH_STATUS_FAILURE,
  AUTH_STATUS_REQUEST
} from './actiontypes.js';

const auth = ( state = { token:undefined }, action ) => {
  if( relevantType( action, AUTH_LOGIN_SUCCESS ) ){
    console.log( 'auth reducer', AUTH_LOGIN_SUCCESS, action )
    return { token: action.payload.token }
  }
  return state;
}

const status = ( state  = { name:'Guest', email:'None' }, action ) =>  {
  if( relevantType( action, AUTH_STATUS_SUCCESS ) ){
    console.log( 'status action', action )
    return {  ...action.payload };
  }
  return state;
}

const meta = ( state = { isFetching:false }, action ) => {
  if( relevantType( action, [ AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST ] ) ){
    switch( action.type ){
      case AUTH_LOGIN_SUCCESS:
      case AUTH_LOGIN_FAILURE:
        return { isFetching:false };
      case AUTH_LOGIN_REQUEST:
        return { isFetching:true };
    }
  }
  return state;
}

const authReducer = combineReducers( {
  auth,
  meta
} )

export const GetAuthToken = state => state.auth.token;
export const GetIsFetching = state => state.meta.isFetching;

export default authReducer;
