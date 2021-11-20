import React from 'react'
import './NonVegBuildControls.css'
import NonVegBuildControl from './NonVegBuildControl/NonVegBuildControl'

const controls = [
    { label: 'Bacon', type: 'bacon' },
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Chicken Patties', type: 'chicken' },
    { label: 'Beef Patties', type: 'beef'}
]

const buildControl = (props) => (
    <div className="nonVegBuildControls">
        <p className="priceTag">Current Price: Rs. <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <NonVegBuildControl 
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className="OrderButton"
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
)

export default buildControl;