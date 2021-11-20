import React from 'react'
import './Logo.css'
import burgerlogo from '../../assets/images/burger_logo.png'

const logo = (props) => (
    <div className="Logo" style={{height :props.height}}>
        <img src={burgerlogo} alt="burger_logo"/>
    </div>
);

export default logo;