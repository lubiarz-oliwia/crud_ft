import React, { useEffect, useState } from 'react'
import { getUserData } from '../../actions/user';

function FormSidebar({ form_header, onSaveConfirm, onSaveCancel, campaignCost }) {
    const [userData, setUserData] = useState({ account: '' });

    useEffect(() => {
        getUserData(setUserData)
    }, []);

    let amountLeft = userData.account - campaignCost;

    return (
        <div className="form_sidebar">
            <h1>{form_header}</h1>
            <h2>Funds left on Emerald account: ${amountLeft}</h2>
            <div>
                <button
                    onClick={onSaveCancel}
                >
                    Cancel
                </button>
                <button
                    onClick={onSaveConfirm}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default FormSidebar
