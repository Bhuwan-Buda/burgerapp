import React, { Component } from 'react'
import './Location.css'
import Auxiliary from '../../../hoc/Auxiliary'
 
class Location extends Component {
    render() {
        return (
            <Auxiliary>
                <div className="Location">
                    <span>VISIT US</span>
                    <p>Meet us at our own corner.</p>
                    <a href="https://goo.gl/maps/mLq5oeNtkjqcaQ5C7" target="_blank" alt="Map" rel="noopener noreferrer">GET DIRECTION</a>
                </div>
            </Auxiliary>   
        )
    }
}

export default Location;
