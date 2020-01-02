import React, { useReducer } from 'react';
import ListContext from './listContext';
import listReducer from './listReducer';
import uuid from 'uuid';
import { ADD_ITEM, REMOVE_ITEM } from '../types';

const ListState = props => {
  const initialState = {
    list: [
      {
        id: 1,
        item: {
          id: 1,
          name: 'Cafe',
          price: 1.2
        },
        quantity: 2
      },

      {
        id: 2,
        item: {
          id: 2,
          name: 'Açucar',
          price: 0.8
        },
        quantity: 1
      },
      {
        id: 3,
        item: {
          id: 3,
          name: 'Sumo Laranja',
          price: 1.1
        },
        quantity: 4
      }
    ],
    total: 7.6
  };

  const [state, dispatch] = useReducer(listReducer, initialState);

  // ADD_Item to List
  const addItemToList = product => {
    product.id = uuid.v4();
    dispatch({
      type: ADD_ITEM,
      payload: product
    });
  };

  // REMOVE ITEM
  const removeItem = id => {
    dispatch({
      type: REMOVE_ITEM,
      payload: id
    });
  };

  return (
    <ListContext.Provider
      value={{
        list: state.list,
        total: state.total,
        addItemToList,
        removeItem
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListState;
