import { createStore, combineReducers, applyMiddleware } from 'redux';
import user from './user/reducers';
import { authApi } from 'store/user/middleware';
import { asyncResolved } from 'store/middleware/asyncResolved';
import { createLogger } from 'redux-logger';

export default function configureStore( preloadedState ){
  const middlewares = [
    authApi,
    asyncResolved,
    createLogger()
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
