import React, { useState, useContext } from 'react';
import ListContext from '../../context/list/listContext';
import ItemContext from '../../context/item/itemContext';

const AddItemListModal = () => {
  const [product, setProduct] = useState({
    item: null,
    quantity: 1
  });

  const listContext = useContext(ListContext);
  const itemContext = useContext(ItemContext);

  const { items } = itemContext;

  const { addItemToList } = listContext;

  const { quantity } = product;

  const onChange = e => {
    e.preventDefault();
    let value = e.target.value;

    if (e.target.name === 'item') {
      value = items.find(item => item.id == e.target.value);
    }

    setProduct({
      ...product,
      [e.target.name]: e.target.name === 'quantity' ? parseInt(value) : value
    });
  };

  const submitItem = () => {
    if (product.item) {
      addItemToList(product);
    }
    setProduct({
      item: null,
      quantity: 1
    });
  };

  return (
    <div
      className='modal fade'
      id='addProductModal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Add a Product
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <form>
              <div className='form-group'>
                <label htmlFor='Item'>Product</label>
                <select
                  className='form-control selectpicker'
                  id='Item'
                  onChange={onChange}
                  name='item'
                >
                  <option defaultValue>Select Product</option>
                  {items.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='quantity'>Quantity</label>
                <input
                  type='number'
                  className='form-control'
                  id='quantity'
                  name='quantity'
                  value={quantity}
                  onChange={onChange}
                  placeholder='Quantity'
                />
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              Close
            </button>
            <button
              type='button'
              onClick={submitItem}
              className='btn btn-primary'
              data-dismiss='modal'
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemListModal;
