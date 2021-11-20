import React from 'react'
import './AboutContent.css'
import BurgerImage3 from '../../../assets/images/burger_image3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    offset: 0,
    duration: 1200,
    once: true
});

export default function AboutContent() {
    return (
        <div className="AboutContent">
            <div className="image" data-aos="zoom-in">
                <img src={BurgerImage3} alt="Burger_House" />
            </div>
            <div className="text">
                <span>Burger Goals</span>
                <p><strong>Burger House</strong> is a place where you can order delicious burger. Our major priority is to focus on your health, by providing you healthy burgers at minimum cost.<br/>This app allows you to choose your own ingredients for your Burger.</p>
            </div>
        </div>
    )
}
