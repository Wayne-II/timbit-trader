import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_RESOLVED
} from './actiontypes';

import { loginResolved } from './actions';

export const authApi = store => next => action => {
  if( /request$/.test( action.type ) ){
    const actionParts = action.type.split( '/' )
    const endpoint = actionParts.slice( 1,-1 ).join( '/' );
    let fulfilled;
    switch( action.type ){
      case AUTH_LOGIN_REQUEST:
        fulfilled = responseJson => {
          console.log( responseJson )
          store.dispatch(
            loginResolved(
              { token:responseJson.auth_token },
              {
                message:responseJson.message,
                status:responseJson.status
              }
            )
          );
        }
    }
    console.log( fulfilled, action.type );
    if( fulfilled ){
      fetch( `http://arseinc.ddns.net:5000/${endpoint}`, {
        method:'POST',
        headers:{'Content-Type':'application/json', accept:'application/json'},
        body:JSON.stringify( action.payload ),
      } )
      .then( response => response.json() )
      .then( fulfilled )
    }
  }
  return next( action );
}
