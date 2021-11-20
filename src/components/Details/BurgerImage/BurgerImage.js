import React from 'react'
import './BurgerImage.css'
import Emoji from '../../../assets/images/emoji2.png'

export default function BurgerImage() {
    return (
        <div className="BurgerImage">
            <span>Spicy Burger</span><br/>
            <img src={Emoji} alt="Emoji" />
        </div>
    )
}
