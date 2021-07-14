import React, { useState } from 'react'

function Form() {
    const [form, setForm] = useState({ campaign_name: '', keywords: '', bid_amount: '', campaign_fund: '', status: '', town: '', radius: '' })

    return (
        <form>
            <div>
                <label>Campaing name</label>
                <input type="text" name="campaign_name" value={form.campaign_name} />
            </div>
            <div>
                <label>Keywords</label>
                <input type="text" name="keywords" value={form.keywords} />
            </div>
            <div>
                <label>Bid amount</label>
                <input type="number" name="bid_amount" value={form.bid_amount} />
            </div>
            <div>
                <label>Campaign fund</label>
                <input type="number" name="campaign_fund" value={form.campaign_fund} />
            </div>
            <div>
                <label>Status</label>
                <div className="inputs_box">
                    <p><input type="radio" name="status" /> On</p>
                    <p><input type="radio" name="status" /> Off</p>
                </div>
            </div>
            <div>
                <label>Town</label>
                <select value={form.town}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div>
                <label>Radius</label>
                <input type="number" name="radius" value={form.radius} />
            </div>
        </form>
    )
}

export default Form
