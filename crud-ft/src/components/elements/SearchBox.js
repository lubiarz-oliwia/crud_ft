import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBox() {
    return (
        <div className="searchBox">
            <FontAwesomeIcon icon={faSearch} /><input></input>
        </div>
    )
}

export default SearchBox
