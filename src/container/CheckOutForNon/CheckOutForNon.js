import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummaryNonVeg/CheckoutSummary'
import Auxiliary from '../../hoc/Auxiliary'

class CheckOutForNon extends Component {

    state={
        ingredients: '',
        totalPrice: 0
    }

    componentDidMount() {
        this.setState({
            ingredients:this.props.location.state.ingredients,
            totalPrice: this.props.location.state.price
        })
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.push({
            pathname: '/contact-form-non',
            search: '',
            state: {ingredients: this.state.ingredients, price: this.state.totalPrice}
        });
    }
    render() { 
        return (
            <Auxiliary>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} /> 
            </Auxiliary>
        )        
    }
}

export default CheckOutForNon;
