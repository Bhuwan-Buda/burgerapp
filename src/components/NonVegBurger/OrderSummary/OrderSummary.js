import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingkey => {
            return (<li key={ingkey}>
                    <span style={{textTransform:'capitalize'}}>{ingkey}</span>:{props.ingredients[ingkey]}
                </li>);
        })
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: Rs. {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button 
                btnType="Danger"
                clicked={props.purchaseCancelled}
                >CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.purchaseContinued}
                >CONTINUE</Button>
        </Auxiliary>
    )
}

export default orderSummary;