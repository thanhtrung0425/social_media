import { Avatar } from '@mui/material'
import "./SideBarRow.css"
import React from 'react'

function SideBarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  )
}

export default SideBarRow