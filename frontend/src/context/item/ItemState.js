import React, { useReducer } from 'react';
import ItemContext from './itemContext';
import itemReducer from './itemReducer';
import uuid from 'uuid';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  SET_FILTER
} from '../types';

const ItemState = props => {
  const initialState = {
    items: [
      {
        id: 1,
        name: 'Cafe',
        price: 1.2
      },

      {
        id: 2,
        name: 'Açucar',
        price: 0.8
      },
      {
        id: 3,
        name: 'Sumo Laranja',
        price: 1.1
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(itemReducer, initialState);

  // ADD_Item
  const addItem = item => {
    item.id = uuid.v4();

    //Parse Float price and add to item
    const priceFloated = parseFloat(item.price);
    item.price = priceFloated;

    dispatch({
      type: ADD_ITEM,
      payload: item
    });
  };

  // REMOVE ITEM
  const removeItem = id => {
    dispatch({
      type: REMOVE_ITEM,
      payload: id
    });
  };

  // UPDATE CONTACT
  const updateItem = item => {
    //Parse Float price and add to item
    const priceFloated = parseFloat(item.price);
    item.price = priceFloated;

    dispatch({
      type: UPDATE_ITEM,
      payload: item
    });
  };
  // SET CURRENT
  const setCurrent = item => {
    dispatch({
      type: SET_CURRENT,
      payload: item
    });
  };

  // CLEAR CURRENT
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  };

  // SET FILTERD
  const filterItems = text => {
    dispatch({
      type: SET_FILTER,
      payload: text
    });
  };

  // CLEART FILTERED
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER
    });
  };

  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        current: state.current,
        filtered: state.filtered,
        addItem,
        removeItem,
        updateItem,
        setCurrent,
        clearCurrent,
        filterItems,
        clearFilter
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;
