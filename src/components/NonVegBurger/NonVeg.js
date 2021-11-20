import React from 'react'
import NonVegIngredients from './NonVegIngredients/NonVegIngredients'
import './NonVeg.css'

const NonVeg = (props) => {

    let updatedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])]
            .map((_, i) => {
                return <NonVegIngredients key={ingKey + i} type={ingKey} />
            })
        })
        .reduce((arr , el) => {
            return arr.concat(el)
        }, []);
    
    if(updatedIngredients.length === 0) {
        updatedIngredients = <p className="nonvegmessage">Please start adding ingredients!</p>
    }    

    return (
        <div className="nonVegBurger">
            <NonVegIngredients type="bread-top" />
            {updatedIngredients}
            <NonVegIngredients type="bread-bottom" />
        </div>
    )
}

export default NonVeg;