import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { addCampaign } from '../actions/campaign'
import Form from './elements/Form'
import FormSidebar from './elements/FormSidebar'
import Header from './elements/Header'

const MIN_BID_AMOUNT = 1000;

function FormAdd({ fundsLeft }) {
    const [form, setForm] = useState({ campaign_name: '', keywords: '', bid_amount: '', campaign_fund: '', status: 'on', town: 'Warsaw', radius: '' })
    const [error, setError] = useState({ campaign_name: '', keywords: '', bid_amount: '', campaign_fund: '', status: '', town: '', radius: '' })

    let history = useHistory();

    const validator = (name, value) => {
        switch (name) {
            case 'campaign_name':
                if (!value) {
                    return 'This field is mandatory';
                }
                break;

            case 'keywords':
                if (!value) {
                    return 'This field is mandatory';
                }
                break;

            case 'campaign_fund':
                if (!value) {
                    return 'This field is mandatory';
                }
                break;

            case 'radius':
                if (!value) {
                    return 'This field is mandatory';
                }
                break;

            case 'bid_amount':
                if (value < MIN_BID_AMOUNT) {
                    return 'The min amount is $1000';
                }
                break;

            // case 'bid_amount': 
            // if(!value) {
            //     return 'This field is mandatory';
            // }
            // break;

            default:
                break;
        }
    }

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

    return (
        <>
            <Header />
            <div className='form_container'>
                <FormSidebar
                    form_header='Add campaign'
                    onSaveConfirm={handleSubmit}
                    onSaveCancel={() => console.log('push to main')}
                    fundsLeft={fundsLeft - form.campaign_fund}
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

