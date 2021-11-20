import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import './Burger.css'

const burger = (props) => {

    let updatedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])]
            .map((_, i) => {
                return <BurgerIngredients key={ingKey + i} type={ingKey} />
            })
        })
        .reduce((arr , el) => {
            return arr.concat(el)
        }, []);
    
    if(updatedIngredients.length === 0) {
        updatedIngredients = <p className="message">Please start adding ingredients!</p>
    }    

    return (
        <div className="vegBurger">
            <BurgerIngredients type="bread-top" />
            {updatedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}

export default burger;