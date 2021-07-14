import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

function Table() {
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
      <tbody>
        <tr>
          <td>CES-9000</td>
          <td>50mt</td>
          <td>9mm</td>
          <td>1/2"</td>
          <td>Kangal / Coil</td>
          <td>1/2"</td>
          <td>Kangal / Coil</td>
          <td><FontAwesomeIcon icon={faEllipsisV} /></td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
