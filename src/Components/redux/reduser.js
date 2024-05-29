const initialState = {
    cash: 0,
    color: false
    
} 
export const Reduser = (state = initialState, action) => {
  switch( action.type){
    case "ADD_MANEY":
    return {...state, cash: state.cash + action.payload};
    case "TAKE_MANEY":
      return {...state, cash: state.cash - action.payload};
      case "ISKENDER":
        return {...state, cash: state.cash + action.payload};
        case "ISKEN":
        return {...state, cash: state.cash - action.payload};
        case "COLOR":
          return {...state, color: !state.color}
    default: 
    return state;
  }
}