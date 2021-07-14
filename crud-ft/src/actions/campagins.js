import { API_URL } from "./constants"

export const getAllCampaigns = (successCallback) => {
    fetch(`${API_URL}/campaigns`)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        successCallback(data);
      })
      .catch(err => console.log(err));
  };

  