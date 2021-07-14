import { API_URL } from "./constants"

export const getCampaign = (id, successCallback) => {
    fetch(`${API_URL}/campaigns/${id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data);
            successCallback(data);
        })
        .catch(err => console.log(err));
};

export const editCampaign = (id, campaign, successCallback) => {
    fetch(`${API_URL}/campaigns/${id}`,  {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(campaign)
      })
        .then(r => r.json())
        .then(data => {
            console.log(data);
            successCallback(data);
        })
        .catch(err => console.log(err));
};

export const deleteCampaign = (id) => {
    return fetch(`${API_URL}/campaigns/${id}`, {
        method: 'DELETE',
    })
        .catch(err => console.log(err));
};

export const addCampaign = (campaign) => {
    return fetch(`${API_URL}/campaigns`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(campaign),
    })
        .catch(err => console.log(err));
};
