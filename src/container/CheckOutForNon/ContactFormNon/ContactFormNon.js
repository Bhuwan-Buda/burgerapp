import React,{ Component } from 'react'
import './ContactFormNon.css'
import axios from 'axios'
import Modal from 'react-modal'

Modal.setAppElement("#root");

class ContactFormNon extends Component {

    state = {
        name: '',
        address: '',
        email: '',
        number: '',
        zipcode: '',
        payment: 'Cash-On-Delivery',
        nonModalValue: false
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

    orderHandlerNon = (e) => {
        e.preventDefault();

        const nvdetail = {
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

        axios.post('http://localhost/reactphp/noninsert.php', nvdetail ,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res=> {
                console.log(res.data);                                                                                                                                                                                                                                                                                           
            });

        axios.post('http://localhost/reactphp/userInsert.php', user_detail ,{
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
            nonModalValue: true
        })
    }

    nonButtonHandler = () => {
        this.setState({ nonModalValue: false });
        this.props.history.push('/nonVegBurger');
    }
    render(){

        return (
            <div className="ContactFormNon">
                <Modal 
                    isOpen={this.state.nonModalValue} 
                    onRequestClose={() => this.setState({nonModalValue:false})}
                    className="nonModal">
                    <p>Your order is placed.</p>
                    <div>
                        <button onClick={this.nonButtonHandler}>OK!</button>
                    </div>
                </Modal>
                <h3>Please provide your data.</h3>
                <div className="form-division">
                    <form onSubmit={this.orderHandlerNon}>
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

                        <span style={{color: '#32a8ff'}}>Payment Method:</span> 
                        <input 
                            type="radio"
                            name="payment"
                            id="radio"
                            value={this.state.payment}
                            required /> <span style={{color: '#32a8ff'}}>Cash-On-Delivery</span>    

                        <input 
                            type="hidden"
                            name="price"
                            value={this.props.location.state.price} />

                        <input 
                            type="hidden"
                            name="ingredients"
                            value={this.props.location.state.ingredients} />

                        <button 
                            type="submit" 
                            name="submitnon"
                            id="nonSubmit">Submit</button>
                    </form> 
                </div>
            </div>
        )
    }   
}

export default ContactFormNon;
