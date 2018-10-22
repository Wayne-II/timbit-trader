import { createStore, combineReducers, applyMiddleware } from 'redux';
import user from './user/reducers';
import { authApi } from 'store/user/api';
import { asyncResolved } from 'store/middleware/asyncResolved';

export default function configureStore( preloadedState ){
  const middlewares = [
    authApi,
    asyncResolved
  ]

  const store = createStore(
    combineReducers( {
      user
    } ),
    preloadedState,
    applyMiddleware( ...middlewares )
  )

  return store;
}
