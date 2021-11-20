import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHamburger, faHome, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active="active">
            <i style={{color: '#00d4f0'}}>
                <FontAwesomeIcon icon={faHome} />
            </i> Burger House</NavigationItem>
        <NavigationItem link="/vegBurger">
            <i style={{color: '#47b812'}}>
                <FontAwesomeIcon icon={faHamburger} />
            </i> Veg Burger</NavigationItem>
        <NavigationItem link="/nonVegBurger">
            <i style={{color: '#c33a02'}}>
                <FontAwesomeIcon icon={faHamburger} />
            </i> Non-Veg Burger</NavigationItem> 
        <NavigationItem link="/aboutus">
            <i style={{color: '#00d4f0'}}>
                <FontAwesomeIcon icon={faQuestionCircle}/>
            </i> About Us</NavigationItem>
        <NavigationItem link="/orders">
            <i style={{color: '#00d4f0'}}>
                <FontAwesomeIcon icon={faCartPlus} />
            </i> Orders
        </NavigationItem>
    </ul>
)

export default navigationItems;


