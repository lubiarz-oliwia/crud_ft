import { API_URL } from "./constants"

export const getAllCampaigns = (successCallback) => {
  return fetch(`${API_URL}/campaigns`)
    .then(r => r.json())
    .then(data => {
      successCallback(data);
    })
    .catch(err => console.log(err));
};

