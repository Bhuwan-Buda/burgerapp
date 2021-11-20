import React from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Image from './HomepageImage/Image'
import BurgerImage from './BurgerImage/BurgerImage'
import CustomerMessage from './CustomerMessage/CustomerMessage'
import AboutContent from './AboutContent/AboutContent'
import Location from './Location/Location'
import CustomerChoice from './CustomerChoice/CustomerChoice'
import Carousel from './Carousel/Carousel'
import Footer from './Footer/Footer'

export default function Details() {
    return (
        <Auxiliary>
                <Image />
                <CustomerMessage />
                <BurgerImage />
                <AboutContent />
                <Location />
                <CustomerChoice />
                <Carousel />
                <Footer />
        </Auxiliary>
    )
}
