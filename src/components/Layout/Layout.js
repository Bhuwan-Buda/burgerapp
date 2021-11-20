import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import './Layout.css'
import Toolbar from '../UI/Toolbar/Toolbar'
import SideDrawer from '../UI/SideDrawer/SideDrawer'

class Layout  extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });

    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar clicked={this.sideDrawerOpenHandler}/>
                <SideDrawer 
                    closed={this.sideDrawerClosedHandler}
                    show={this.state.showSideDrawer} />   
                <main className="Content">
                    {this.props.children}
                </main>
            </Auxiliary> 
        )
    }
}

export default Layout;