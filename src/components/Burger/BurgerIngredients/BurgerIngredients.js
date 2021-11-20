import React, { Component } from 'react'
import './BurgerIngredients.css'
import PropTypes from 'prop-types'

class BurgerIngredients extends Component {
    render() {
        let ingredient = null;

        switch(this.props.type) {
            case ('bread-bottom'): 
                ingredient = <div className="BreadBottom"></div>;
                break;
            case ('bread-top'): 
                ingredient = <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                </div>;
                break;
            case ('onion'): 
                ingredient = <div className="Onion"></div>;
                break;
            case ('cheese'): 
                ingredient = <div className="Cheese"></div>;
                break;
            case ('tomato'): 
                ingredient = <div className="Tomato"></div>;
                break;
            case ('lettuce'): 
                ingredient = <div className="Lettuce"></div>;
                break;   
            case ('vegpatties'): 
                ingredient = <div className="Vegpatties"></div>;
                break;     
            default: 
                ingredient = null;
        } 
        return ingredient;
    }
}    

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredients;