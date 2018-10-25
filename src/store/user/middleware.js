import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_RESOLVED,
  AUTH_STATUS_REQUEST,
  AUTH_STATUS_FAILURE,
  AUTH_STATUS_SUCCESS,
  AUTH_STATUS_RESOLVED
} from './actiontypes';
import { GetAuthToken } from './selectors';

import { loginResolved, userStatus, userStatusResolved } from './actions';

const processRequest = ( store, action )=> {
  switch( action.type ){
    case AUTH_LOGIN_REQUEST:
      return responseJson => {
        const payload = { token:responseJson.auth_token };
        const meta = {
            message:responseJson.message,
            status:responseJson.status
          };
        const loginResolvedAction = loginResolved( payload, meta )
        store.dispatch( loginResolvedAction );
      }
    case AUTH_STATUS_REQUEST:
      return responseJson => {
        const payload = { token:responseJson.auth_token };
        const meta = {
            message:responseJson.message,
            status:responseJson.status
          };
        const statusResolvedAction = userStatusResolved( payload, meta )
        store.dispatch( statusResolvedAction );
      }
  }
}

const processSuccess = ( store, action )=> {
  switch( action.type ){
    case AUTH_LOGIN_SUCCESS:

      return responseJson => {
        const payload = { token:responseJson.auth_token };
        const meta = {
          message:responseJson.message,
          status:responseJson.status
        }
        const userStatusAction = userStatus( payload, meta )
        store.dispatch( userStatusAction );
      }
  }
}

export const authApi = store => next => action => {
  let fulfilled;
  let endpoint;
  let method;
  let headers = {}
  let data = {}
  if( /auth\/(login|register)\/request$/.test( action.type ) ){
    fulfilled = processRequest( store, action );
    const actionParts = action.type.split( '/' );
    endpoint = actionParts.slice( 1,-1 ).join( '/' );
    method = 'POST'
    data = { body:JSON.stringify( action.payload ) }
  }else if( /auth\/(login|register)\/success$/.test( action.type ) ){
    fulfilled = processSuccess( store, action );
    endpoint = 'auth/status';
    method = "GET";
    headers[ 'Authorization' ] = `Bearer ${action.payload.token}`
  }else if( /auth\/status\/request$/.test( action.type ) ){
    fulfilled = processRequest( store, action );
    endpoint = 'auth/status';
    method = "GET";
    headers[ 'Authorization' ] = `Bearer ${ GetAuthToken( store.getState() ) }`
  }
  if( fulfilled ){
    console.log( 'middleware', action.type, endpoint );

    fetch( `http://arseinc.ddns.net:5000/${endpoint}`, {
      method,
      headers:{
        'Content-Type':'application/json',
        accept:'application/json',
        ...headers
      },
      ...data
    } ).then( response => response.json() ).then( fulfilled );
  }
  return next( action );
}
