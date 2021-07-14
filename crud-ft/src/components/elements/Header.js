import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import SearchBox from './SearchBox';

function Header() {
    return (
        <>
            <nav>
                <SearchBox />
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faPlusCircle} />
                        ADD CAMPAIGN
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faList} />
                        CAMPAIGN LIST
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUser} />
                        User
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header
