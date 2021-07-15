import React, {useState} from 'react'
import { addCampaign } from '../actions/campaign'
import Form from './elements/Form'
import FormSidebar from './elements/FormSidebar'
import MainPage from './MainPage'
const MIN_BID_AMOUNT = 1000;
function FormAdd({fundsLeft}) {
    const [form, setForm] = useState({ campaign_name: '', keywords: '', bid_amount: '', campaign_fund: '', status: 'on', town: 'Warsaw', radius: '' })
    const [error, setError] = useState({ campaign_name: '', keywords: '', bid_amount: '', campaign_fund: '', status: '', town: '', radius: '' })
    const [showList, setShowList] = useState(false);

    const validator = (name, value) => {
        switch (name) {
            case 'campaign_name':
                if(!value) {
                    return 'This field is mandatory';
                }
                break;

            case 'keywords':
                if(!value) {
                    return 'This field is mandatory';
                }
        
            default:
                break;
        }

        // if(!bid_amount) {
        //     errors['bid_amount'] = 'This field is mandatory';
        // }

        // if(bid_amount < MIN_BID_AMOUNT && bid_amount) {
        //     errors['bid_amount'] = 'The min amount is $1000';
        // }

        // if(!campaign_fund) {
        //     errors['campaign_fund'] = 'This field is mandatory';
        // }

        // if(!radius.length) {
        //     errors['radius'] = 'This field is mandatory';
        // }

    }


    const handleChange = (e) => {
        const { campaign_name, keywords, bid_amount, campaign_fund, status, town, radius} = form;
        const {name, value} = e.target;
        console.log(name, value);
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
        const { campaign_name, keywords, bid_amount, campaign_fund, status, town, radius} = form;
        e.preventDefault();

        const isAnyFieldEmpty = Object.values(form).some(el => el === '');
        if (Object.keys(error) && !isAnyFieldEmpty) {
            addCampaign(form).then(setShowList(true));
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
        {!showList ? <div className='form_container'>
            <FormSidebar form_header='Add campaign' onSaveConfirm={handleSubmit} onSaveCancel={setShowList} fundsLeft={fundsLeft-form.campaign_fund}/>
            <Form handleChange={handleChange} form={form} error={error}/>
        </div> :  <MainPage/> }
        </>
    )
}

export default FormAdd

