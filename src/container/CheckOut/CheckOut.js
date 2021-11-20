import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import CheckOutSummaryVeg from '../../components/Order/CheckoutSummaryVeg/CheckOutSummaryVeg'
// import { Route } from 'react-router-dom'
// import ContactForm from './ContactForm/ContactForm'

class CheckOut extends Component {

    state={
        ingredients: '',
        totalPrice: 0
    }

    componentDidMount() {
        this.setState({
            ingredients: this.props.location.state.ingredients,
            totalPrice : this.props.location.state.price
        })
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.push({
            pathname: '/contact-form',
            search: '',
            state: {ingredients: this.state.ingredients, price: this.state.totalPrice}
        });
    }

    render() { 
        return (
            <Auxiliary>
                <CheckOutSummaryVeg 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} /> 
            </Auxiliary>
        )        
    }
}

export default CheckOut
