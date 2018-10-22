export const asyncResolved = store => next => action => {
  if( /resolved$/.test( action.type ) ){
    let actionParts = action.type.split( '/' );
    actionParts = actionParts.slice( 0,-1 );
    actionParts.push( action.meta.status );
    store.dispatch( {
      type: actionParts.join( '/' ),
      payload:action.payload,
      meta:action.meta
    } );
  }
  return next( action );
}
