import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ handelSearch }) => {
  return (
    <div className="search">
      <MdSearch className="search_icon" size="1.3rem" />
      <input onChange={e => handelSearch(e.target.value)} 
      type="text" 
      placeholder="search" />
    </div>
  );
};

export default Search
