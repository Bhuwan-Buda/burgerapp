import React, { Component } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Auxiliary from '../../../hoc/Auxiliary'
import Modal from 'react-modal'
import axios from 'axios'

export default class Footer extends Component {

    state = {
        email: '',
        modalValue: false
    }

    valueChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    display = (e) => {
        
        e.preventDefault();
        const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if(!this.state.email || reg.test(this.state.email) === false){
            alert("Please provide email address!!!");
            return false;
        }

        const email = {
            email: this.state.email
        }

        axios.post('http://localhost/reactphp/postemail.php', email , {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res=> {
                console.log(res.data);                                                                                                                                                                                                                                                                                           
            });

        this.setState({email: '' , modalValue: true})
    }

    notdisplay = () => {
        this.setState({modalValue:false})
    }

    render() {
        return (
            <Auxiliary>
                <Modal 
                    isOpen={this.state.modalValue} 
                    onRequestClose={() => this.setState({modalValue:false})}
                    className="subscribeModal">    
                    <p>Thank you for your subscription.</p>
                    <div>
                        <button onClick={this.notdisplay}>OK!</button>
                    </div>
                </Modal> 
                <div className="Footer">
                    <div className="Site_Title">
                        <div className="hr_1"></div>
                        <span className="Title">Burger House</span>
                        <div className="hr_2"></div>
                    </div>
                    <br />
                    <div className="social_medias">
                        <a href="http://www.facebook.com/bhuwan.buda.1" rel="noopener noreferrer" alt="facebook" target="_blank">
                            <i><FontAwesomeIcon icon={faFacebook} className="icon" /></i>
                        </a>
                        <a href="http://www.twitter.com/tweetbhuwan143" rel="noopener noreferrer" alt="twitter" target="_blank">
                            <i><FontAwesomeIcon icon={faTwitter} className="icon" /></i>
                        </a>
                        <a href="http://www.instagram.com/bhuwan.buda.1" rel="noopener noreferrer" alt="insta" target="_blank">
                            <i><FontAwesomeIcon icon={faInstagram} className="icon" /></i>
                        </a>
                    </div>
                    <br />
                    <div className="vr_1"></div>
                    <br />
                    <div className="subscribe">
                        <form onSubmit={this.display}>
                            <div>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="text" 
                                    value={this.state.email} 
                                    onChange={this.valueChange} 
                                    placeholder="Your email address" />
                            </div>
                            <div className="button">
                                <input 
                                    type="submit" 
                                    name="submit" 
                                    id="button" 
                                    value="Subscribe"/>
                            </div>
                        </form>
                    </div>
                    <br />
                    <div className="hr_3">
                    </div>
                    <p id="Copyright">All Rights Reserved. &copy; {new Date().getFullYear()} </p>
                </div>
            </Auxiliary>    
        )
    }
}

