import { Avatar } from '@mui/material'
import React from 'react'
import "./ContactRow.css"

function ContactRow({src, friendName}) {
  return (
    <div className="contact_row">
      {src && <Avatar src={src} />}
      <h4>{friendName}</h4>
    </div>
  )
}

export default ContactRow