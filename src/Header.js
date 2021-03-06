import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { IconButton, Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useStateValue } from './StateProvider.js';

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className= "header">
            <div className="header__left">
                <img src='https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png' alt='' />
                
                <div className='header__input'>
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                <HomeIcon fontSize="large" />
                </div>

                <div className="header__option">
                <FlagIcon fontSize="large" />
                </div>

                <div className="header__option">
                <SubscriptionsIcon fontSize="large" />
                </div>

                <div className="header__option">
                <StorefrontIcon fontSize="large" />
                </div>

                <div className="header__option">
                <SupervisorAccountIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>
                
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
            </div>   
        </div>
    )
};

export default Header
