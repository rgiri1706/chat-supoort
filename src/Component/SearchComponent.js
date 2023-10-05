import React, { useState } from 'react'
import '../styles/SearchComponent.css';

const SearchComponent = ({handleChange}) => {

  const [searchText, setText] = useState('');
  const handleSearchText = (e) =>{
    setText(e.target.value);
    handleChange(e.target.value)
  }
  return (
    <div className='search-style'>
        <div className='search-heading'>Filter by Title/Order Id</div>
        <input type='text' value={searchText} onChange={(e)=>handleSearchText(e)}  className='input-style' placeholder='Start typing to search'/>
    </div>
  )
}

export default SearchComponent