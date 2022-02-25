import React from 'react'

const SearchInput = () => {
  return (
    <div className='search_input_container'>
        <i className="fas fa-search"></i>
        <input className='search_input' type="text" placeholder='Collection, item or user' />
    </div>
  )
}

export default SearchInput