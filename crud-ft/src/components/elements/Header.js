import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faMoneyBill, faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import SearchBox from './SearchBox';

function Header( {showAddForm, showCampaignList, onSearchboxChange, funds} ) {

    return (
        <>
            <nav>
                <SearchBox onSearchboxChange={onSearchboxChange}/>
                <ul>
                    <li onClick={showAddForm} >
                        <FontAwesomeIcon icon={faPlusCircle} />
                        ADD CAMPAIGN
                    </li>
                    <li onClick={showCampaignList} >
                        <FontAwesomeIcon icon={faList} />
                        CAMPAIGN LIST
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMoneyBill} />
                        ${funds}
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
