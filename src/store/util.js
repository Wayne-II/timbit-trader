export const relevantType = ( action, types ) =>  {
  return types.includes( action.type );
}
