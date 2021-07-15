import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBox({ onSearchboxChange }) {
  const [current, setCurrent] = useState("");

  return (
    <div className="searchBox">
      <FontAwesomeIcon icon={faSearch} />
      <input
        placeholder='search for campaign name or town'
        value={current}
        onChange={e => {
          setCurrent(e.target.value);
          onSearchboxChange(current);
        }} />
    </div>
  )
}

export default SearchBox
