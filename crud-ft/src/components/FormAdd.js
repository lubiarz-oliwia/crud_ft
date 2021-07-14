import React from 'react'
import Form from './elements/Form'
import FormSidebar from './elements/FormSidebar'

function FormAdd() {
    return (
        <div className='form_container'>
            <FormSidebar form_header='Add campaign' />
            <Form />
        </div>
    )
}

export default FormAdd

