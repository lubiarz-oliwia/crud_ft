import React from 'react'
import Form from './elements/Form'
import FormSidebar from './elements/FormSidebar'

function FormEdit() {
    return (
        <div className='form_container'>
            <FormSidebar form_header='Edit campaign' />
            <Form />
        </div>
    )
}

export default FormEdit;
