import './NavBar.css'
import NavItem from './NavItem'
// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import items from '../../assets/navitems.json'
import ProfileButton from './ProfileButton';
import OpenModalButton from '../OpenModalButton';
import CreateQuestionModal from '../CreateQuestionModal';

// dynamic icon provider, dont mind the repeat icon, it is to deal with index
let icons = [
    <i class="fas fa-home"></i>,
    <i class="fas fa-home"></i>,
    <i class="fab fa-wpforms"></i>,
    <i class="fas fa-check-square"></i>,
    <i class="fas fa-users"></i>,
    <i class="fas fa-bell"></i>
]
const NavBar = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let index = 0;

    return(
        <div className="nav-container">
            <nav className="nav">
                <div className="nav-section">
                    <div className="logo">
                        <NavLink
                            to='/'
                        >
                            Query
                        </NavLink>
                    </div>
                    {
                        items.map(item => {
                            return (
                                index += 1,
                                <NavItem
                                    icon={icons[index]}
                                    item={item}
                                    url={item.url}
                                >
                                </NavItem>
                            )
                        })
                    }
                </div>
                <div className="nav-section-two">
                    <div className="search-container">
                        <i class="fas fa-search"></i>
                        <input type="text" />
                    </div>
                    {isLoaded && (
                        <ProfileButton user={sessionUser} />
                    )}
                    <OpenModalButton
                        buttonText="Add question"
                        modalComponent={<CreateQuestionModal />}
                    />
                </div>
            </nav>   
        </div>
    )

}

export default NavBar