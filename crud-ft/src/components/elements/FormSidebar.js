import React from 'react'

function FormSidebar({ form_header, onSaveConfirm, onSaveCancel, fundsLeft}) {
    return (
        <div className="form_sidebar">
            <h1>{form_header}</h1>
            <h2>Funds left on Emerald account: ${fundsLeft}</h2>
            <div>
                <button onClick={onSaveCancel}>Cancel</button>
                <button onClick={onSaveConfirm}>Save</button>
            </div>
        </div>
    )
}

export default FormSidebar
