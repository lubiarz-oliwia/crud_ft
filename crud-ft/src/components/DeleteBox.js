import React from 'react'

function DeleteBox({onDeleteConfirm, onDeleteCancel}) {
    return (
        <div className="delete_box">
            <h1>Delete an item?</h1>
            <div>
                <button onClick={onDeleteCancel}>No</button>
                <button onClick={onDeleteConfirm}>Yes</button>
            </div>
        </div>
    )
}

export default DeleteBox
