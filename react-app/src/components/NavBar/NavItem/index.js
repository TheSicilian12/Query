import './NavItem.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavItem = ({item, icon,url}) => {
    const [isHidden,setIsHidden] = useState(true)
    // FIXME: LONG HOVER
    // let timer = 0;
    // const timeout = 3000;
    // let handleMouseEnter = () => {
    //     timer = setTimeout(() => {
    //         setIsHidden(true)
    //      } , timeout)
    // }
    // let handleMouseLeave = () => {
    //    setIsHidden(false)
    //    clearTimeout(timer)
    // }
    let handleMouseLeave = () => {
        setIsHidden(true)
    }
    let handleMouseEnter = () => {
        setIsHidden(false)
    }
    let tooltip = isHidden ? 'hidden' : 'tooltip';
    
    return(
        <div className="nav-item-container">
            <NavLink
                onMouseEnter={handleMouseEnter}
                // onBlur={handleMouseEnter}
                // onMouseOver={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="nav-item"
                to={url} 
            >
                {icon}
            </NavLink>
            <div className="tooltip-container">
                {/* <div className="triangle">
                </div> */}
                <div className={tooltip}>
                    <div className="triangle">
                    </div>
                    {item.text}
                </div>
            </div>
        </div>  
    )

}

export default NavItem