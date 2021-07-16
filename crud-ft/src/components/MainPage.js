import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { getAllCampaigns } from '../actions/campagins'
import { deleteCampaign } from '../actions/campaign'
import DeleteBox from './DeleteBox'
import Header from './elements/Header'
import Table from './elements/Table'

function MainPage() {
    let history = useHistory();
    const [campaigns, setCampaigns] = useState([]);
    const [itemToBeDeletedId, setitemToBeDeletedId] = useState(null);
    const [campaignsFiltered, setCampaignsFiltered] = useState([]);

    const wrapperfunc = (allCampaigns) => {
        setCampaigns(allCampaigns);
        setCampaignsFiltered(allCampaigns);
    }

    useEffect(() => {
        getAllCampaigns(wrapperfunc);
    }, [])

    function itemToBeDeletedIds(id) {
        setitemToBeDeletedId(id);
    }

    function deleteItem(id) {
        deleteCampaign(id).then(() => {
            setitemToBeDeletedId(null);
            getAllCampaigns(wrapperfunc);
        })
    }

    const editItem = (id) => {
        const location = {
            pathname: `/editCampaign/${id}`,
            state: { id }
        };
        history.push(location);
    }

    const filter = (searchText) => {
        let chosenCampaing = campaigns;
        chosenCampaing = campaigns.filter((el) => {
            const { campaign_name, town } = el;
            if (campaign_name && town)
                return campaign_name.toLowerCase().includes(searchText.toLowerCase()) || town.toLowerCase().includes(searchText.toLowerCase());
            return false;
        });
        setCampaignsFiltered(chosenCampaing);
        if (searchText.length <= 1) {
            setCampaignsFiltered(campaigns)
        }
    }

    return (
        <>
            <Header
                onSearchboxChange={filter}
            />
            {itemToBeDeletedId ?
                <DeleteBox
                    onDeleteConfirm={() => deleteItem(itemToBeDeletedId)}
                    onDeleteCancel={() => (setitemToBeDeletedId(null))}
                />
                :
                <Table
                    deleteItem={(id) => itemToBeDeletedIds(id)}
                    editItem={(id) => editItem(id)}
                    campaigns={campaignsFiltered}
                />}
        </>
    )
}

export default MainPage