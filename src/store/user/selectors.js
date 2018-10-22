import * as local from './reducers';

export const GetAuthToken = state => {
  return local.GetAuthToken( state.user );
}

export const GetAuthIsFetching = state => {
  return local.GetIsFetching( state.user );
}
