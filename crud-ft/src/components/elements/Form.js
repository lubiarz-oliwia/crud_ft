import React from 'react'

function Form({ handleChange, form, error }) {
    const towns = ["Select", "Bydgoszcz", "Gdansk", "Krakow", "Lodz", "Poznan", "Szczecin", "Warsaw", "Wroclaw"];
    const keywords = ['']

    return (
        <form>
            <div>
                <label>Campaing name</label>
                <input type="text" name="campaign_name" value={form.campaign_name} onChange={handleChange} />
                {error.campaign_name && <p className="error">{error.campaign_name}</p>}
            </div>
            <div>
                <label>Keywords</label>
                <input type="text" name="keywords" value={form.keywords} onChange={handleChange} />
                {error.keywords && <p className="error">{error.keywords}</p>}
            </div>
            <div>
                <label>Bid amount ($)</label>
                <input type="number" name="bid_amount" value={form.bid_amount} onChange={handleChange} />
                {error.bid_amount && <p className="error">{error.bid_amount}</p>}
            </div>
            <div>
                <label>Campaign fund ($)</label>
                <input type="number" name="campaign_fund" value={form.campaign_fund} onChange={handleChange} />
                {error.campaign_fund && <p className="error">{error.campaign_fund}</p>}
            </div>
            <div>
                <label>Status</label>
                <div className="inputs_box">
                    <p><input type="radio" name="status" value="on" onChange={handleChange} checked={form.status === 'on'} /> On</p>
                    <p><input type="radio" name="status" value="off" onChange={handleChange} checked={form.status === 'off'} /> Off</p>
                </div>
            </div>
            <div>
                <label>Town</label>
                <select name="town" value={form.town} onChange={handleChange} >
                    {towns.map((town, index) => {
                        return (
                            <option key={index} value={town} selected={form.town === { town }}>{town}</option>
                        )
                    })
                    }
                </select>
                {error.town && <p className="error">{error.town}</p>}
            </div>
            <div>
                <label>Radius (km)</label>
                <input type="number" name="radius" value={form.radius} onChange={handleChange} />
                {error.radius && <p className="error">{error.radius}</p>}
            </div>
        </form>
    )
}

export default Form
