import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import NonVeg from '../../components/NonVegBurger/NonVeg'
import NonVegBuildcontrols from '../../components/NonVegBurger/BuildControls/NonVegBuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/NonVegBurger/OrderSummary/OrderSummary'
import './NonVegBurgerBuilder.css'

const INGREDIENT_PRICE = {
    salad: 30,
    chicken: 100,
    beef: 140,
    cheese: 80,
    bacon: 110
}

class NonVegBurgerBuilder extends Component {

    state = {
        ingredients: {
            bacon:0,
            salad:0,
            cheese: 0,
            chicken: 0,
            beef: 0,
        },
        totalPrice : 400,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState (ingredients) {
        const sum  = Object.keys(ingredients)
            .map(ingkey => {
                return ingredients[ingkey]
            })
            .reduce((sum, el) => {
                return sum + el;
            },0);
        this.setState({purchasable: sum > 0});    
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        this.props.history.push({
            pathname: '/checkoutfornon',
            search: '',
            state: {ingredients: this.state.ingredients, price: this.state.totalPrice}
        });
    }
    render() {

        const disablesInfoNon = {
            ...this.state.ingredients
        };

        for (let item in disablesInfoNon) {
            disablesInfoNon[item] = disablesInfoNon[item] <= 0
        }

        return (
            <Auxiliary>
                <Modal 
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients} 
                        purchaseCancelled={this.purchaseCancelHandler} 
                        purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>
                <div className="nonvegHeading">
                    <h1 id="nonveg">Build a Non-veg Burger</h1>
                </div>
                <NonVeg ingredients={this.state.ingredients}/>
                <NonVegBuildcontrols 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    disabled={disablesInfoNon}
                    price={this.state.totalPrice}/>
            </Auxiliary>
        )    
    }
}

export default NonVegBurgerBuilder;
