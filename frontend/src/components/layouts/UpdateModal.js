import React, { useState, useContext, useEffect } from 'react';
import ItemContext from '../../context/item/itemContext';

const UpdateModal = () => {
  const itemContext = useContext(ItemContext);

  const { current } = itemContext;

  const [updateItem, setUpdateItem] = useState({
    id: 0,
    name: '',
    price: ''
  });

  const { name, price } = updateItem;

  useEffect(() => {
    if (current) {
      const { id, name, price } = current;
      setUpdateItem({
        id,
        name,
        price
      });
    }
  }, [current]);

  //Regular Expression for Validation
  const priceRe = /^[\d,]+(\.\d*)?$/;

  const onChange = e => {
    if (e.target.name === 'price' && !priceRe.test(e.target.value)) {
      setUpdateItem({
        ...updateItem,
        price: ''
      });
    } else {
      setUpdateItem({
        ...updateItem,
        [e.target.name]: e.target.value
      });
    }
  };

  const submitItem = () => {
    itemContext.updateItem(updateItem);
    itemContext.clearCurrent();
  };

  return (
    <div
      className='modal fade'
      id='updateModal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Update an Item
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
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
