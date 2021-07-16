import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { addCampaign } from '../actions/campaign'
import { editUserData, getUserData } from '../actions/user'
import { validator } from '../actions/validator'
import Form from './elements/Form'
import FormSidebar from './elements/FormSidebar'
import Header from './elements/Header'

function FormAdd() {
    const [form, setForm] = useState({ campaign_name: '', keywords: '', bid_amount: '', campaign_fund: '', status: 'on', town: 'Warsaw', radius: '' })
    const [error, setError] = useState({ campaign_name: '', keywords: '', bid_amount: '', campaign_fund: '', status: '', town: '', radius: '' })
    const [userData, setUserData] = useState({ id: '', login: '', account: '' });
    let history = useHistory();

    useEffect(() => {
        getUserData(setUserData)
    }, []);

    const { id } = userData;

    let data = { ...userData, account: userData.account - form.campaign_fund }

    validator();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const errors = {};
        setForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        });

        errors[name] = validator(name, value);

        setError((prevState) => ({
            ...prevState,
            ...errors,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isAnyFieldEmpty = Object.values(form).some(el => el === '');
        if (Object.keys(error) && !isAnyFieldEmpty) {
            addCampaign(form).then(history.push('/'));
            editUserData(id, data)
        }

        if (isAnyFieldEmpty) {
            const errors = {};
            Object.keys(form).forEach((el) => {
                errors[el] = validator(el, form[el]);
            });

            setError((prevState) => ({
                ...prevState,
                ...errors,
            }));
        }

    }

    const onSaveCancel = () => {
        history.push('/');
    }

    return (
        <>
            <Header 
            onSearchboxChange={() => {}}
            />
            <div className='form_container'>
                <FormSidebar
                    form_header='Add campaign'
                    onSaveConfirm={handleSubmit}
                    onSaveCancel={onSaveCancel}
                    campaignCost={form.campaign_fund}
                />
                <Form
                    handleChange={handleChange}
                    form={form}
                    error={error}
                />
            </div>
        </>
    )
}

export default FormAdd

