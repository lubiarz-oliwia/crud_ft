import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import SearchBox from './SearchBox'

function Header({ onSearchboxChange }) {
    return (
        <>
            <nav>
                <SearchBox onSearchboxChange={onSearchboxChange} />
                <ul>
                    <li>
                        <Link to='/addCampaign'>
                            <FontAwesomeIcon icon={faPlusCircle} />
                        ADD CAMPAIGN
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faList} />
                        CAMPAIGN LIST
                        </Link>
                    </li>
                    <li>
                        <Link to='user'>
                            <FontAwesomeIcon icon={faUser} />
                        User
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header
