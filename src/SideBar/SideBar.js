import React from 'react'
import "./SideBar.css";
import SideBarRow from './SideBarRow';
import PeopleIcon from '@mui/icons-material/People';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function SideBar() {
  return (
    <div className="sidebar">
      <SideBarRow src='https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/aptwohu/2021_10_05/zuckerberg3-scaled_qpun.jpg'
                  title="Mark Zuckerberg"/>
      <SideBarRow 
      Icon={PeopleIcon}
      title='Friends'
      />
      <SideBarRow
        Icon={SupervisedUserCircleOutlinedIcon}
        title='Communities'
      />
      <SideBarRow
        Icon={StorefrontIcon}
        title='Marketplace'
      />
      <SideBarRow
        Icon={OndemandVideoOutlinedIcon}
        title='Watch'
      />
      <SideBarRow
        Icon={WidgetsOutlinedIcon}
        title='Play Games'
      />
      <SideBarRow
        Icon={ExpandMoreIcon}
        title='See More'
      />

    </div>
  )
}

export default SideBar