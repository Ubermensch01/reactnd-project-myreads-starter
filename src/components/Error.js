import React, {Component} from "react";
import {Link} from "react-router-dom";

class Error extends Component {
    render() {
        return (
            <div className="app" key="myReads">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="link">
                    <Link to="/">Go back to the catalogue</Link>
                </div>
            </div>
        )
    }
}

export default Error;