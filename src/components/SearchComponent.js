import React, { Component } from "react";
import { Input } from "reactstrap";

function SearchFunction({value, items}) {
    if(value != null) {
        const search = items.filter((item) => item.name === value).map((item) => {
            return(
                <div className="item col-4 col-md-1" key={item.id}>
                    <img className="item-image" src={item.image} alt={item.name}/>
                    <h4>{item.name}</h4>
                    <h5>{item.price}</h5>
                    <h5>Add +</h5>
                </div>
            )
        })
        return(
            <div className="row">
                {search}
            </div>
        )
    } else {
        return(<div>No result!</div>)
    }
}

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div
                        className="search col-8 offset-2 col-md-5 offset-md-4"
                        placeholder="Search item"
                    >
                        
                        <div className="row">
                            <Input className="col-10" placeholder="Search item" onChange={(value) => {this.setState({search: value.target.value})}}/>
                            <div className="col-2"><i className="fa fa-search fa-lg col-2 col-md-1"/></div>
                        </div>
                        
                    </div>
                </div>
                <SearchFunction value={this.state.search} items={this.props.items}/>
            </div>
        );
    }
}

export default Search;