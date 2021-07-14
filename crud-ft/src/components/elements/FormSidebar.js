import React from 'react'

function FormSidebar({ form_header, save_form, cancel_form }) {
    return (
        <div className="form_sidebar">
            <h1>{form_header}</h1>
            <div>
                <button onClick={cancel_form}>Cancel</button>
                <button onClick={save_form}>Save</button>
            </div>
        </div>
    )
}

export default FormSidebar
