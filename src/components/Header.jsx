import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import {useStateValue} from '../StateProvider'

function Header() {
   
  const [{user}] = useStateValue();

  return (
    <div className='main__header'>

      <div className="main__header-left">
        <Avatar
          className='main__header-avatar'
          alt=''
          src=''
        />
        <AccessTimeIcon 
          className="header__clock"
        />
      </div>

      <div className="main__header-search">
        <SearchIcon />
        <input type="text"
          className="header__input"
          placeholder='Hello developers'
        />
      </div>

      <div className="main__header-right">
        <HelpOutlineOutlinedIcon 
        className="header__helpIcon"
        />
      </div>

    </div>
  )
}

export default Header