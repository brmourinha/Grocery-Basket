import React, { useRef, useContext, Fragment } from 'react';
import ItemContext from '../../context/item/itemContext';

const SearchItems = () => {
  const itemContext = useContext(ItemContext);

  const { filterItems, clearFilter } = itemContext;
  const text = useRef('');

  const onChange = e => {
    if (text.current.value !== '') {
      filterItems(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <Fragment>
      <form className='form-block my-2 my-lg-0'>
        <input
          ref={text}
          onChange={onChange}
          className='form-control mr-sm-2'
          type='text'
          placeholder='Search Item'
        />
      </form>
    </Fragment>
  );
};

export default SearchItems;
