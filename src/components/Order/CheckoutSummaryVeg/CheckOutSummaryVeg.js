import React, { Component } from 'react'
import './CheckOutSummaryVeg.css'
import Button from '../../UI/Button/Button'
import Burger from '../../Burger/Burger'

class CheckoutSummaryVeg extends Component {

    render() { 
        return (
            <div className="CheckOut">
                    <h4 id="h4">Here is your burger. We hope it tastes well !!!</h4>
                    <div className="BurgerHere">
                        <Burger 
                            ingredients={this.props.ingredients}/>
                    </div>
                    <Button 
                        btnType="Danger"
                        clicked={this.props.checkoutCancelled}>CANCEL</Button>
                    <Button 
                        btnType="Success"
                        clicked={this.props.checkoutContinued}>PROCEED</Button>                
            </div>
        )
    }
}

export default CheckoutSummaryVeg