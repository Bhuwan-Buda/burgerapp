import React from 'react'
import './CustomerChoice.css'
import BurgerMaking from '../../../assets/images/burger_making.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    offset: 0,
    duration: 1200,
    once: true
});

export default function CustomerChoice() {
    return (
        <div className="CustomerChoice">
            <div className="text">
                <span>Make Your Own</span>
                <p><strong>"Eat clean to stay fit;have a burger to stay sane."</strong><br />We allow our customers to make their own burger. You can select your ingredients for your burger. Burger will cost as per your selected quantity of ingredients.</p>
            </div>
            <div className="image" data-aos="zoom-in">
                <img src={BurgerMaking} alt="burger_making_picture"/>
            </div>
        </div>
    )
}
