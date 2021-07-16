import React, { useState, useEffect } from 'react'
import { editUserData, getUserData } from '../actions/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Header from './elements/Header';

function User() {
    const [form, setForm] = useState({ login: '', account: '' });
    const [showEditForm, setShowEditForm] = useState(false);

    useEffect(() => {
        getUserData(setForm)
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    const { id } = form;

    const handleSubmit = () => {
        editUserData(id, form).then(() => {
            console.log(form)
            setShowEditForm(false)
            getUserData(setForm)
        })
    }

    return (
        <>
            <Header />
            { !showEditForm ?
                <div className='user_container'>
                    <h1>Login</h1>
                    <p>{form.login}</p>
                    <h1>EmeraldAccount</h1>
                    <p>$ {form.account}</p>
                    <button
                        className='edit_button'
                        onClick={setShowEditForm}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                        EDIT
                    </button>
                </div> :
                <form
                    onSubmit={handleSubmit}
                    className='user_form'>
                    <h1>Login</h1>
                    <input
                        type="text"
                        name="login"
                        value={form.login}
                        onChange={handleChange}
                    />
                    <h1>EmeraldAccount ($)</h1>
                    <input
                        type="number"
                        name="account"
                        value={form.account}
                        onChange={handleChange}
                    />
                    <button
                        className="save_button"
                    >
                        Save
                        </button>
                </form>
            }

        </>
    )
}

export default User
