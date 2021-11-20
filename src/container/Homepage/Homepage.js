import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Details from '../../components/Details/Details'

export default class Homepage extends Component {
    render() {
        return (
            <Auxiliary>
                <Details />
            </Auxiliary>
        )
    }
}
