import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_FILTER,
  CLEAR_FILTER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        )
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case SET_FILTER:
      return {
        ...state,
        filtered: state.items.filter(item => {
          const regex = new RegExp(`${action.payload}`, 'gi'); //gi= global insensitive
          return item.name.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };

    default:
      return state;
  }
};
