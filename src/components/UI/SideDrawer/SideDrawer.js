import React from 'react';
import Logo from '../../../components/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.css'
import Auxiliary from '../../../hoc/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

const sideDrawer = (props) => {

    let showHide = 'Close';
    if(props.show) {
        showHide= 'Open'
    }

    return (
        <Auxiliary>
            <Backdrop show={props.show} clicked={props.closed}/>
            <div 
                className="SideDrawer" 
                id={showHide}
                >
                <Logo height="11%"/>
                <nav className="Navigation">
                    <NavigationItems />
                </nav>
            </div>        
        </Auxiliary>
        
    );
}

export default sideDrawer;