
import React from 'react';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { Avatar, IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Header() {
  return (
    <div className="header">

      <div className="header_left">
        <img src="https://st4.depositphotos.com/5868334/23704/v/450/depositphotos_237042306-stock-illustration-creative-initial-letter-black-colors.jpg" alt="" />
        <div className="header_input">
          <SearchIcon />
          <input placeholder='Search' type="text" size="25"/>
        </div>
      </div>

      <div className="header_center">
        <div className="header_option header_option--active">
          <HomeOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <OndemandVideoOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <WidgetsOutlinedIcon fontSize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Avatar/>
          <h4>Name</h4>
        </div>

        <div className='iconButton'>
          <IconButton>
            <AppsIcon/>
          </IconButton>
        </div>
        <div className='iconButton'>
          <IconButton>
            <ForumIcon />
          </IconButton>
        </div>
        <div className='iconButton'>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
        </div>
        <div className='iconButton'>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Header