import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function ActionButtons() {
    return (
        <div className="actionbuttons_box">
            <div>
                <FontAwesomeIcon icon={faEdit} />
                <p>Edit</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faTrash} />
                <p>Delete</p>
            </div>
        </div>
    )
}

export default ActionButtons
