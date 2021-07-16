import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import ActionButtons from './ActionButtons'

function Table({ deleteItem, editItem, campaigns }) {
  const [showActionButtons, setShowActionButtons] = useState(null);

  function showActionsButtons(id) {
    setShowActionButtons(id);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Campaign name</th>
          <th>Keywords</th>
          <th>Bid amount</th>
          <th>Campaign fund</th>
          <th>Status</th>
          <th>Town</th>
          <th>Radius</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody
        onMouseLeave={setShowActionButtons}
      >
        {campaigns.map((item, index) => {
          return (
            <tr
              key={index}
              onMouseEnter={() => showActionsButtons(item.id)}
            >
              <td>{item.campaign_name}</td>
              <td>{item.keywords}</td>
              <td>${item.bid_amount}</td>
              <td>${item.campaign_fund}</td>
              <td>{item.status}</td>
              <td>{item.town}</td>
              <td>{item.radius}km</td>
              <td>
                {showActionButtons !== item.id ?
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                  /> :
                  <ActionButtons
                    deleteItem={() => deleteItem(item.id)}
                    editItem={() => editItem(item.id)}
                  />}
              </td>
            </tr>)
        })}
      </tbody>
    </table>
  )
}

export default Table
