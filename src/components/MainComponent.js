import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./HomeComponent";
import Search from "./SearchComponent";

export default class Main extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <br/><br/><br/>
                <Search/>
                <Switch>
                    <Route path="/home" component={Home} />
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
