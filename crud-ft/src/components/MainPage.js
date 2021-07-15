import React, { useState, useEffect } from 'react'
import { getAllCampaigns } from '../actions/campagins';
import { deleteCampaign } from '../actions/campaign';
import DeleteBox from './DeleteBox';
import Header from './elements/Header'
import Table from './elements/Table'
import FormAdd from './FormAdd';
import FormEdit from './FormEdit';

function MainPage() {
    let funds = 700000
    const [addFormIsShown, setAddFormIsShown] = useState(false);
    const [itemToBeDeletedId, setitemToBeDeletedId] = useState(null);
    const [itemToBeEditedId, setItemToBeEdited] = useState(null);
    const [campaigns, setCampaigns] = useState([]);
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

    function itemToBeEditedIds(id) {
        setItemToBeEdited(id);
        console.log(id);
    }

    function deleteItem(id) {
        deleteCampaign(id);
        setitemToBeDeletedId(null);
    }

    const filter = (searchText) => {
        let chosenCampaing = campaigns;
        // if (searchText) {
            chosenCampaing = campaigns.filter((el) => {
                const { campaign_name, town } = el;
                if (campaign_name && town)
                    return campaign_name.toLowerCase().includes(searchText.toLowerCase()) || town.toLowerCase().includes(searchText.toLowerCase());
                return false;
            });
        // }
        setCampaignsFiltered(chosenCampaing);
        if (searchText.length <= 1) {
            setCampaignsFiltered(campaigns)
        }
    }

    return (
        <>
            <Header
                showAddForm={setAddFormIsShown}
                // showCampaignList={setListIsShown}
                onSearchboxChange={filter}
                funds={funds}
            />
            {itemToBeDeletedId ? <DeleteBox onDeleteConfirm={() => deleteItem(itemToBeDeletedId)} onDeleteCancel={() => (setitemToBeDeletedId(null))} /> : null}
            {itemToBeEditedId ? <FormEdit id={itemToBeEditedId} /> : null}
            {addFormIsShown && !itemToBeEditedId && !itemToBeDeletedId ? <FormAdd fundsLeft={funds}/> : null}
            {!addFormIsShown && (!itemToBeDeletedId && !itemToBeEditedId) ? 
            <Table 
            deleteItem={(id) => itemToBeDeletedIds(id)} 
            editItem={(id) => itemToBeEditedIds(id)} 
            campaigns={campaignsFiltered} 
            /> 
            : 
            null}
        </>
    )
}

export default MainPage