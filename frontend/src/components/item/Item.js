import React, { Fragment, useContext } from 'react';
import ItemContext from '../../context/item/itemContext';

const Item = ({ item }) => {
  const itemContext = useContext(ItemContext);

  const { setCurrent, removeItem } = itemContext;
  const { name, price, id } = item;

  const handleDelete = () => {
    removeItem(id);
  };

  const handleUpdate = () => {
    setCurrent(item);
  };

  return (
    <Fragment>
      <th scope='col'>{name}</th>
      <th scope='col'>€{price.toFixed(2)}</th>
      <th scope='col'>
        <button
          type='button'
          data-toggle='modal'
          data-target='#updateModal'
          onClick={handleUpdate}
          className='btn btn-info'
        >
          Update
        </button>
      </th>
      <th scope='col'>
        <button type='button' onClick={handleDelete} className='btn btn-danger'>
          Delete
        </button>
      </th>
    </Fragment>
  );
};

export default Item;
