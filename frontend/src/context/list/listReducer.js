import { ADD_ITEM, REMOVE_ITEM } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload],
        total: state.total + action.payload.quantity * action.payload.item.price
      };
    case REMOVE_ITEM:
      return {
        ...state,
        total:
          state.total -
          state.list.filter(item => item.id === action.payload)[0].item.price *
            state.list.filter(item => item.id === action.payload)[0].quantity,
        list: state.list.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};
