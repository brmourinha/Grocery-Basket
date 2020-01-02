import React, { Fragment, useContext } from 'react';
import ItemContext from '../../context/item/itemContext';
import Item from './Item';
import AddModal from '../layouts/AddModal';
import UpdateModal from '../layouts/UpdateModal';
import SearchBar from '../layouts/SearchItems';

const ShowItems = () => {
  const itemContext = useContext(ItemContext);

  const { items, filtered } = itemContext;
  return (
    <Fragment>
      <SearchBar />
      <table className='table table-striped mt-3'>
        <thead>
          <tr>
            <th scope='col'>Item</th>
            <th scope='col'>Price</th>
            <th scope='col'>Update</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filtered
            ? filtered.map(item => (
                <tr key={item.id}>
                  <Item item={item} />
                </tr>
              ))
            : items.map(item => (
                <tr key={item.id}>
                  <Item item={item} />
                </tr>
              ))}
        </tbody>
      </table>
      <button
        type='button'
        className='btn btn-primary'
        data-toggle='modal'
        data-target='#addModal'
      >
        ADD
      </button>
      <UpdateModal />
      <AddModal />
    </Fragment>
  );
};

export default ShowItems;
