import React from 'react'
import './CustomerMessage.css'
import People from '../../../assets/images/people.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    offset: 0,
    duration: 1200,
    once: true
});

export default function CustomerMessage() {
    return (
        
        <div className="Details">
            <div className="text">
                    <span>Dear Customers</span>
                    <p>Our priority is to provide you healthy and delicious burger.(veg and non-veg)<br/>In line with social distancing measures nowdays, we are operating home delivery service for your better protection in some parts of the city.</p>
            </div>
            <div className="image" data-aos="zoom-in">
                <img src={People} alt="smily_people" />
            </div>    
        </div>
    )
}
