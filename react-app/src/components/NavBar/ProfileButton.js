import React, { useState, useEffect, useRef } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login, logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useModal } from "../../context/Modal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const { closeModal } = useModal();
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(logout());
    history.push("/");
  };

  const handleClick = async (e) => {
      e.preventDefault();
      await dispatch(login('demo@aa.io', 'password'));
      closeModal()
    }

  const ulClassName = "navbar-profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <div className="navbar-profile-button">
        <button className="circle-button" onClick={openMenu}>
          <i className="fas fa-user-circle" />
        </button>
      </div>
      <div className="navbar-profile-dropdown-container">
          {user && (
            <div className={ulClassName} ref={ulRef}>
              <div className="profile-dropdown-user-link">
                <NavLink
                  to={`/users/${user.id}`}
                  onClick={closeMenu}
                >
                  {user.username}
                </NavLink>
              </div>
              <div >
                <button
                 onClick={handleLogout}
                 id="profile-dropdown-logout-button"
                >
                  Log Out
                </button>
              </div>
            </div>
          )
          // : (
          //   <>
          //     <OpenModalButton
          //       buttonText="Log In"
          //       onItemClick={closeMenu}
          //       modalComponent={<LoginFormModal />}
          //     />

          //     <OpenModalButton
          //       buttonText="Sign Up"
          //       onItemClick={closeMenu}
          //       modalComponent={<SignupFormModal />}
          //     />
          //     <button onClick={handleClick}>Demo User</button>
          //   </>
          // )

          }
      </div>
    </>
  );
};

export default ProfileButton;
