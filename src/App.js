import React, { Component } from 'react'
import './App.css'
import Auxiliary from './hoc/Auxiliary'
import Layout from './components/Layout/Layout'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'
import CheckOut from './container/CheckOut/CheckOut'
import CheckOutForNon from './container/CheckOutForNon/CheckOutForNon'
import ContactForm from './container/CheckOut/ContactForm/ContactForm'
import ContactFormNon from './container/CheckOutForNon/ContactFormNon/ContactFormNon'
import NonVegBurgerBuilder from './container/NonVegBurgerBuilder/NonVegBurgerBuilder'
import Homepage from './container/Homepage/Homepage'
import AboutUs from './container/AboutUs/AboutUs'
import OrdersList from './container/Orders/OrdersList'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Auxiliary>
                    <Route path="/checkout" exact component={CheckOut} />
                    <Route path="/checkoutfornon" exact  component={CheckOutForNon} />
                    <Route path="/contact-form" exact component={ContactForm} />
                    <Route path='/contact-form-non' exact component={ContactFormNon} />
                    <Layout>
                        <Switch>
                            <Route path="/" exact component={Homepage} />
                            <Route path="/vegBurger" exact component={BurgerBuilder} />
                            <Route path="/nonVegBurger" exact component={NonVegBurgerBuilder} />
                            <Route path="/aboutus" exact component={AboutUs} />
                            <Route path="/orders" exact component={OrdersList} />
                        </Switch>
                    </Layout>
                </Auxiliary>                                                                                                                                                 
            </BrowserRouter>   
        )
    }
}

