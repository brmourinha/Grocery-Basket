import React, { Fragment, useContext } from 'react';
import ListContext from '../../context/list/listContext';

const Item = ({ listItem }) => {
  const listContext = useContext(ListContext);

  const { removeItem } = listContext;
  const { item, quantity, id } = listItem;

  const handleDelete = () => {
    removeItem(id);
  };

  return (
    <Fragment>
      <div className='w-25'>{item.name}</div>
      <div className='w-25'>
        <span className='mr-1'>{quantity}</span>X
        <span className='ml-1'>{item.price.toFixed(2)}</span>€
      </div>
      <div className='w-25'>{(item.price * quantity).toFixed(2)}€</div>
      <div className='w-25'>
        <button className='btn btn-danger' onClick={handleDelete}>
          X
        </button>
      </div>
    </Fragment>
  );
};

export default Item;
