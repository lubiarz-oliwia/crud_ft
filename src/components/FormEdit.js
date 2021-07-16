import React, { useState, useEffect } from 'react'
import { editCampaign, getCampaign } from '../actions/campaign'
import { editUserData, getUserData } from '../actions/user'
import { validator } from '../actions/validator'
import Form from './elements/Form'
import FormSidebar from './elements/FormSidebar'
import Header from './elements/Header'

function FormEdit({ history }) {
    const [form, setForm] = useState({ id: '', campaign_name: '', keywords: '', bid_amount: '', campaign_fund: '', status: '', town: '', radius: '' });
    const [error, setError] = useState({ id: '', campaign_name: '', keywords: '', bid_amount: '', campaign_fund: '', status: '', town: '', radius: '' })
    const [userData, setUserData] = useState({ id: '', login: '', account: '' });
    const [finalCampaigncost, setFinalCampaignCost] = useState(0);

    const { state } = history.location;

    useEffect(() => {
        getCampaign(state.id, setForm);
        getUserData(setUserData)
    }, [])

    const { id } = userData;

    let data = { ...userData, account: userData.account - form.campaign_fund }

    validator();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const errors = {};

        if (name === 'campaign_fund') {
            setFinalCampaignCost(value);
        }

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
            editCampaign(state.id, form, setForm).then(() => {
                (history.push('/'));
                editUserData(id, data)
            })
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
                onSearchboxChange={() => { }}
            />
            <div className='form_container'>
                <FormSidebar
                    form_header='Edit campaign'
                    onSaveConfirm={handleSubmit}
                    campaignCost={finalCampaigncost}
                    onSaveCancel={onSaveCancel}
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

export default FormEdit;
