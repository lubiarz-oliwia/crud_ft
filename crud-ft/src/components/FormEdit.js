import React, { useState, useEffect } from 'react'
import { editCampaign, getCampaign } from '../actions/campaign'
import Form from './elements/Form'
import FormSidebar from './elements/FormSidebar'
import MainPage from './MainPage';

function FormEdit({ id }) {
    const [form, setForm] = useState({ campaign_name: '', keywords: '', bid_amount: '', campaign_fund: '', status: '', town: '', radius: '' });
    const [error, setError] = useState({ campaign_name: '', keywords: '', bid_amount: '', campaign_fund: '', status: '', town: '', radius: '' })
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        getCampaign(id, setForm);
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e)
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const handleSubmit = (e) => {
        const { campaign_name, keywords, bid_amount, campaign_fund, status, town, radius } = form;
        e.preventDefault();
        setError({});
        let isError = false;

        if (!campaign_name.length) {
            setError(prev => {
                return {
                    ...prev,
                    campaign_name: 'This field is mandatory'
                }
            })
            isError = true;
        }

        if (!keywords.length) {
            setError(prev => {
                return {
                    ...prev,
                    keywords: 'This field is mandatory'
                }
            })
            isError = true;
        }

        if (!bid_amount.length) {
            setError(prev => {
                return {
                    ...prev,
                    bid_amount: 'This field is mandatory'
                }
            })
            isError = true;
        }

        if (bid_amount < 1000 && bid_amount.length > 0) {
            setError(prev => {
                return {
                    ...prev,
                    bid_amount: 'The min amount is $1000'
                }
            })
            isError = true;
        }

        if (!campaign_fund.length) {
            setError(prev => {
                return {
                    ...prev,
                    campaign_fund: 'This field is mandatory'
                }
            })
            isError = true;
        }

        if (radius.length === 0) {
            setError(prev => {
                return {
                    ...prev,
                    radius: 'This field is mandatory'
                }
            })
            isError = true;
        }

        if (!radius.includes('km') && radius.length > 0) {
            setError(prev => {
                return {
                    ...prev,
                    radius: 'This field should be in km'
                }
            })
            isError = true;
        }

        if (!isError) {
            editCampaign(id, form, setForm);
            setShowList(true)
        }

        console.log(form);
    }

    return (
        <>
            {!showList ? <div className='form_container'>
                <FormSidebar form_header='Edit campaign' onSaveConfirm={handleSubmit} onSaveCancel={setShowList} />
                <Form handleChange={handleChange} form={form} error={error} />
            </div> : <MainPage />}
        </>
    )
}

export default FormEdit;
