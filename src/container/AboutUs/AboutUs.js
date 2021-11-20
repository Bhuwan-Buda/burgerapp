import React, { Component } from 'react'
import './AboutUs.css'
import Auxiliary from '../../hoc/Auxiliary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import Subscribers from '../../components/Details/Footer/Subscribers/Subscribers'
import Modal from 'react-modal'

export default class AboutUs extends Component {

    state = {
        tag: 'Items Price List',
        modalValue: false
    }

    viewPrice = () => {
        this.setState({modalValue: true})
    }

    buttonHandler = () => {
        this.setState({modalValue: false})
    }
    render() {
        return (
            <Auxiliary>
                <div className="AboutUs">
                    <h1 className="Topic">About Us</h1>
                    <p className="Info">Let's know what we are and what we do.</p>           
                </div>
                <div className="Mission">
                    <span className="mission_span">- Our Mission -</span>
                    <p className="mission_p">To make an easy-to-use app for ordering burger.</p>
                </div>
                <div className="About">
                    <span className="about_span">About</span>
                    <p className="about_p">By doing surverys in several part of our nation, we came to know that people are facing problems with ordering the burger of their need. By analyzing this problem, we have launched this web application which allows customers to choose the quantity of ingredients they want to have in their burger. We have made two apps in single web application so that customers can order either veg or non-veg burger. Inline with social distancing, we provide home delivery service to our customers in several parts of country. By analyzing responses from customers, we will launch more web apps for other fast-foods or backery products.</p>
                </div>
                <div className="price_list">
                    <button onClick={this.viewPrice} id="button">
                        {this.state.tag}
                    </button>
                    <Modal 
                        isOpen={this.state.modalValue} 
                        onRequestClose={() => this.setState({modalValue:false})}
                        className="priceList_modal">    
                        <p>
                            <strong>Price of Items</strong> <br/><br />
                            Onion = Rs.20 <br />
                            Tomato = Rs.15 <br/>
                            Lettuce = Rs.30 <br/>
                            Veg Patty = Rs.120 <br/>
                            Salad = Rs.30 <br/>
                            Chicken = Rs.100 <br/>
                            Beef = Rs.140 <br/>
                            Bacon = Rs.110 <br/>
                            Cheese = Rs.80 <br/>
                        </p>
                        <div>
                            <button onClick={this.buttonHandler}>OK!</button>
                        </div>
                    </Modal> 
                </div>
                <div className="Subscribers">
                    <Subscribers />
                </div>
                <div className="Contact_info">
                    <div className="Address_info">
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /></p>
                        <h3>Address</h3>
                        <i>Mahendranagar, Kanchanpur</i>
                    </div>
                    <div className="Phone_info">
                        <p><FontAwesomeIcon icon={faPhone} /></p>
                        <h3>Phone</h3>
                        <i>+977 980-1234567</i>
                    </div>
                    <div className="Email_info">
                        <p><FontAwesomeIcon icon={faEnvelope} /></p>
                        <h3>Email</h3>
                        <i>burgerhouse@gmail.com</i>
                    </div>
                </div>
            </Auxiliary>
            
        )
    }
}
