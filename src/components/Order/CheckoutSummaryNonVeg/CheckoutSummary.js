import React, { Component } from 'react'
import './CheckoutSummary.css'
import Button from '../../UI/Button/Button'
import NonVeg from '../../NonVegBurger/NonVeg'

class CheckoutSummaryNonVeg extends Component {

    render() { 
        return (
            <div className="CheckOutNon">
                    <h4 id="h4n">Here is your burger. We hope it tastes well !!!</h4>
                    <div className="BurgerHere">
                        <NonVeg 
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

export default CheckoutSummaryNonVeg