import React, { Component } from "react";

class Home extends Component {

    constructor(props){
        super(props)
    }

    render() {
        const c1 = this.props.items.filter((item) => item.category === "Fruits & Vegetables").map((item) => {
            return(
            <div className="item" key={item.id}>
                <img className="item-image" src={item.image} alt={item.name}/>
                <h4>{item.name}</h4>
                <h5>{item.price}</h5>
                <h5>Add +</h5>
            </div>
        )});
        const c2 = this.props.items.filter((item) => item.category === "Daily Needs").map((item) => {
            return(
                <div className="item" key={item.id}>
                    <img className="item-image" src={item.image} alt={item.name}/>
                    <h4>{item.name}</h4>
                    <h5>{item.price}</h5>
                    <h5>Add +</h5>
                </div>
            )});
        const c3 = this.props.items.filter((item) => item.category === "Cleaning & Household").map((item) => {
            return(
                <div className="item" key={item.id}>
                    <img className="item-image" src={item.image} alt={item.name}/>
                    <h4>{item.name}</h4>
                    <h5>{item.price}</h5>
                    <h5>Add +</h5>
                </div>
            )});
        const c4 = this.props.items.filter((item) => item.category === "Stationary").map((item) => {
            return(
                <div className="item" key={item.id}>
                    <img className="item-image" src={item.image} alt={item.name}/>
                    <h4>{item.name}</h4>
                    <h5>{item.price}</h5>
                    <h5>Add +</h5>
                </div>
            )});
        return (
            <div>
                <div className="item-display">
                    <h2 className="category">Fruits & Vegetables</h2>
                    <div className="item-list">
                        {c1}
                    </div>
                </div>
                <div className="item-display">
                    <h2 className="category">Daily Needs</h2>
                    <div className="item-list">
                        {c2}
                    </div>
                </div>
                <div className="item-display">
                    <h2 className="category">Cleaning & Household</h2>
                    <div className="item-list">
                        {c3}
                    </div>
                </div>
                <div className="item-display">
                    <h2 className="category">Stationary</h2>
                    <div className="item-list">
                        {c4}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
