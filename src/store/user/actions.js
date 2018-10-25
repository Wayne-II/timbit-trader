import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_RESOLVED,
  AUTH_STATUS_REQUEST,
  AUTH_STATUS_RESOLVED
} from './actiontypes';

export const login = ( credentials ) => {
  return {
    type:AUTH_LOGIN_REQUEST,
    payload:credentials
  }
}

export const loginResolved = ( payload, meta={} ) => {
  return {
    type:AUTH_LOGIN_RESOLVED,
    payload,
    meta
  }
}
export const userStatus = ( payload, meta={} ) => {
  return {
    type:AUTH_STATUS_REQUEST,
    payload,
    meta
  }
}

export const userStatusResolved = ( payload, meta={} ) => {
  return {
    type:AUTH_STATUS_RESOLVED,
    payload,
    meta
  }
}
