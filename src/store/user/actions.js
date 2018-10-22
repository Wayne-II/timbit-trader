import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_RESOLVED
} from './actiontypes';

export const login = ( credentials ) => {
  return {
    type:AUTH_LOGIN_REQUEST,
    payload:credentials
  }
}

export const loginResolved = ( payload, meta={} ) => {
  console.log( payload )
  return {
    type:AUTH_LOGIN_RESOLVED,
    payload,
    meta
  }
}
