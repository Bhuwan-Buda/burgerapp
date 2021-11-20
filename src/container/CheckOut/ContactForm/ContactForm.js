import React,{ Component } from 'react'
import './ContactForm.css'
import axios from 'axios'
import Modal from 'react-modal'

Modal.setAppElement("#root");

class ContactForm extends Component {

    state = {
        name: '',
        address: '',
        email: '',
        number: '',
        zipcode: '',
        payment: 'Cash-On-Delivery',
        modalValue: false
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onChangeAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    onChangeNumber = (e) => {
        this.setState({
            number: e.target.value
        })
    }

    onChangeZipcode = (e) => {
        this.setState({
            zipcode: e.target.value
        })
    }

    orderHandler = (e) => {
        e.preventDefault();

        const detail = {
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
            number: this.state.number,
            zipcode: this.state.zipcode,
            payment: this.state.payment,
            price: this.props.location.state.price,
            ingredients: this.props.location.state.ingredients
        }

        const user_detail = {
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
            number: this.state.number,
            zipcode: this.state.zipcode
        }
        axios.post('http://localhost/reactphp/insert.php', detail , {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res=> {
                console.log(res.data);                                                                                                                                                                                                                                                                                           
            });

        axios.post('http://localhost/reactphp/userInsert.php', user_detail , {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res=> {
                console.log(res.data);                                                                                                                                                                                                                                                                                           
            });

        this.setState({
            name: '',
            address: '',
            email: '',
            number: '',
            zipcode: '',
            payment: '',
            modalValue: true
        })
    }
   
    buttonHandler = () => {
        this.setState({modalValue:false});
        this.props.history.push('/vegBurger');
    }

    render(){     

        return (
            <div className="ContactForm">
                    <Modal 
                        isOpen={this.state.modalValue} 
                        onRequestClose={() => this.setState({modalValue:false})}
                        className="modal">    
                        <p>Your order is placed.</p>
                        <div>
                            <button onClick={this.buttonHandler}>OK!</button>
                        </div>
                    </Modal>                    
                <h3>Please provide your data.</h3>
                <div className="form-division">
                    <form onSubmit={this.orderHandler}>
                        <input 
                            type="text" 
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            value={this.state.name}
                            required
                            onChange={this.onChangeName} />

                        <input 
                            type="text" 
                            name="address"
                            id="address"
                            placeholder="Address"
                            value={this.state.address}
                            required
                            onChange={this.onChangeAddress} />

                        <input 
                            type="email" 
                            name="email"
                            id="email"
                            placeholder="E-mail"
                            value={this.state.email}
                            required
                            onChange={this.onChangeEmail} />

                        <input 
                            type="number" 
                            name="number"
                            id="number"
                            placeholder="Number"
                            value={this.state.number}
                            required
                            onChange={this.onChangeNumber} />
                        
                        <input 
                            type="number"
                            name="zipcode"
                            id="zip-code"
                            placeholder="Zip-Code"
                            value={this.state.zipcode}
                            required
                            onChange={this.onChangeZipcode} />

                        <span style={{color: '#32a8ff'}} className="radio" >Payment Method:</span> 
                        <input 
                            type="radio"
                            name="payment"
                            id="radio"
                            value={this.state.payment}
                            required /> <span style={{color: '#32a8ff'}}>Cash-On-Delivery</span>

                        <input 
                            type="hidden"
                            name="price"
                            value= {this.props.location.state.price} />

                        <input 
                            type="hidden"
                            name="ingredients"
                            value= {this.props.location.state.ingredients} />

                        <button 
                            type="submit" 
                            name="submit"
                            id="submitButton"
                            >Submit</button>
                    </form> 
                </div>
            </div>
        )
    }   
}

export default ContactForm;
