import React, { Fragment, useContext } from 'react';
import ListContext from '../../context/list/listContext';
import Item from './Item';
import AddItemListModal from '../layouts/AddItemListModal';
//import UpdateModal from '../layouts/UpdateModal';

const List = () => {
  const listContext = useContext(ListContext);

  const { list, total } = listContext;

  return (
    <Fragment>
      <div className='container text-center'>
        <ul className='list-group text-center'>
          {list.map(listItem => (
            <li
              key={listItem.id}
              className='list-group-item d-flex justify-content-around'
            >
              <Item listItem={listItem} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          type='button'
          className='btn btn-primary mt-1 mr-5 float-right'
          data-toggle='modal'
          data-target='#addProductModal'
        >
          Add Product
        </button>
        <p className='lead text-info font-weight-bold text-center'>
          Total: {total < 0 ? 0 : total.toFixed(2)}€
        </p>
      </div>
      <AddItemListModal />
    </Fragment>
  );
};

export default List;
