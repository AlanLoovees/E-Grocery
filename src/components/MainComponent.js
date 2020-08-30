import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import Home from "./HomeComponent";
import Search from "./SearchComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { ITEMS } from "../shared/items";


class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: ITEMS
        }
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <br/><br/><br/>
                <Search items={this.state.items}/>
                <Switch>
                    <Route path="/home" component={() => <Home items={this.state.items}/>}/>
                    {/* <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
                    <Route path="/menu/:dishId" component={DishWithId}/>
                    <Route exact path="/contactus" component={Contact}/> */}
                    <Redirect to="/home" />
                </Switch>
                <FooterComponent />
            </div>
        );
    }
}


export default Main;