import React, { Component } from 'react'
import './Carousel.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'

const photos = [
    {
        name: 'photo 1',
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg"
    },
    {
        name: 'photo 2',
        url: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
        name: 'photo 3',
        url: "https://twisper.com/wp-content/uploads/2020/03/close-up-photo-of-burger-3915906-scaled.jpg"
    },
    {
        name: 'photo 4',
        url: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    }
]

export default class Carousel extends Component {
    render() {

        const settings = {
            fade: true,
            infinite:true,
            speed: 2500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: "slides",
            autoplay: true,
            autoplaySpeed:2500,
            pauseOnHover: false
        }

        return (
            <div className="Carousel">
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return(
                            <div className="photos" key={photo.name}>
                                <img width="100%" src={photo.url} alt="caurosel_images" key={photo.name} />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

