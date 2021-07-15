import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function ActionButtons( {editItem, deleteItem}) {

    return (
        <div className="actionbuttons_box">
            <div onClick={editItem}>
                <FontAwesomeIcon icon={faEdit} />
            </div>
            <div onClick={deleteItem}>
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    )
}

export default ActionButtons
