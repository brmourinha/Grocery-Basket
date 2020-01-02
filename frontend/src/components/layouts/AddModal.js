import React, { useState, useContext } from 'react';
import ItemContext from '../../context/item/itemContext';

const AddModal = () => {
  const itemContext = useContext(ItemContext);

  const { addItem } = itemContext;

  const [item, setItem] = useState({
    name: '',
    price: ''
  });

  const { name, price } = item;

  //Regular Expression for Validation
  const priceRe = /^[\d,]+(\.\d*)?$/;

  const onChange = e => {
    if (e.target.name === 'price' && !priceRe.test(e.target.value)) {
      setItem({
        ...item,
        price: ''
      });
    } else {
      setItem({
        ...item,
        [e.target.name]: e.target.value
      });
    }
  };

  const submitItem = () => {
    addItem(item);
    setItem({
      name: '',
      price: ''
    });
  };

  return (
    <div
      className='modal fade'
      id='addModal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Add an Item
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
                <label htmlFor='ItemName'>Item Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='itemName'
                  name='name'
                  value={name}
                  onChange={onChange}
                  placeholder='Item Name'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='price'>Item Price</label>
                <input
                  type='text'
                  className='form-control'
                  id='price'
                  name='price'
                  value={price}
                  onChange={onChange}
                  placeholder='Item Price'
                  required
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

export default AddModal;
