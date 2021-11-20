import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import Buildcontrols from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import './BurgerBuilder.css'

const INGREDIENT_PRICE = {
    onion: 20,
    tomato: 15,
    lettuce: 30,
    vegpatties: 120,
    cheese: 80
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            onion: 0,
            tomato:0,
            lettuce:0,
            vegpatties:0,
            cheese:0
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
            pathname: '/checkout',
            search: '',
            state: {ingredients: this.state.ingredients, price: this.state.totalPrice}
        });
    }
    render() {

        const disablesInfo = {
            ...this.state.ingredients
        };
        for (let key in disablesInfo) {
            disablesInfo[key] = disablesInfo[key] <= 0
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
                <div className="vegHeading">
                    <h1>Build a Veg Burger</h1>
                </div>
                <Burger ingredients={this.state.ingredients} />
                <Buildcontrols 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    disabled={disablesInfo}
                    price={this.state.totalPrice} 
                    constPrice={INGREDIENT_PRICE} />
            </Auxiliary>
        )    
    }
}

export default BurgerBuilder;